import { buildLexer, parseSearch } from './lexer.js'
import { SearchFields } from './index.js'

const defaultFields: SearchFields = {
  test: {
    fieldType: 'text'
  }
}
const defaultLexer = buildLexer(defaultFields)

describe('lexer', () => {
  test('just terms', () => {
    const result = parseSearch(defaultLexer, 'hello world')
    expect(result).toEqual([
      { type: 'term', value: 'hello', modifier: null, isQuoted: false },
      { type: 'term', value: 'world', modifier: null, isQuoted: false }
    ])
  })

  test('quoted terms', () => {
    const result = parseSearch(defaultLexer, '"hello world"')
    expect(result).toEqual([{ type: 'term', value: 'hello world', modifier: null, isQuoted: true }])
  })

  test('modified terms', () => {
    const result = parseSearch(defaultLexer, 'hello +world -universe')
    expect(result).toEqual([
      { type: 'term', value: 'hello', modifier: null, isQuoted: false },
      { type: 'term', value: 'world', modifier: 'positive', isQuoted: false },
      { type: 'term', value: 'universe', modifier: 'negative', isQuoted: false }
    ])
  })

  test('escaped quote in quoted terms', () => {
    const result = parseSearch(defaultLexer, '"hello\\" world"')
    expect(result).toEqual([{ type: 'term', value: 'hello" world', modifier: null, isQuoted: true }])
  })

  test('escaped quote in plain terms', () => {
    const result = parseSearch(defaultLexer, '\\"hello\\" \\"world\\"')
    expect(result).toEqual([
      { type: 'term', value: '"hello"', modifier: null, isQuoted: false },
      { type: 'term', value: '"world"', modifier: null, isQuoted: false }
    ])
  })

  test('just field match', () => {
    const result = parseSearch(defaultLexer, 'test:me')
    expect(result).toEqual([{ type: 'fieldMatch', field: 'test', value: 'me', modifier: null, isQuoted: false }])
  })

  test('mixture terms and fields', () => {
    const result = parseSearch(defaultLexer, 'hello world test:me')
    expect(result).toEqual([
      { type: 'term', value: 'hello', modifier: null, isQuoted: false },
      { type: 'term', value: 'world', modifier: null, isQuoted: false },
      { type: 'fieldMatch', field: 'test', value: 'me', modifier: null, isQuoted: false }
    ])
  })

  test('reorder terms and fields', () => {
    const result = parseSearch(defaultLexer, 'hello test:me world')
    expect(result).toEqual([
      { type: 'term', value: 'hello', modifier: null, isQuoted: false },
      { type: 'fieldMatch', field: 'test', value: 'me', modifier: null, isQuoted: false },
      { type: 'term', value: 'world', modifier: null, isQuoted: false }
    ])
  })

  test('quoted match field', () => {
    const result = parseSearch(defaultLexer, 'hello test:"me world"')
    expect(result).toEqual([
      { type: 'term', value: 'hello', modifier: null, isQuoted: false },
      { type: 'fieldMatch', field: 'test', value: 'me world', modifier: null, isQuoted: true }
    ])
  })

  test('ignores invalid fields', () => {
    const defaultFields: SearchFields = {
      test_: {
        fieldType: 'text'
      }
    }
    const warn = jest.spyOn(console, 'warn').mockImplementation(() => {})
    const invalidLexer = buildLexer(defaultFields)

    expect(warn).toHaveBeenCalledWith(
      'Invalid field test_ passed to @digicatapult/ui-component-library Search component. Field will be excluded'
    )

    const result = parseSearch(invalidLexer, 'test_:me')
    expect(result).toEqual([{ type: 'term', value: 'test_:me', modifier: null, isQuoted: false }])
  })
})
