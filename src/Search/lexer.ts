import moo from 'moo'

import { SearchFields, SearchTerm } from './index.js'

const fieldValidator = /^[a-zA-Z]+$/
export const buildLexer = (fields: SearchFields) => {
  const fieldsArray = Object.entries(fields)
    .map(([fieldName, fieldValue]) => ({
      fieldName,
      ...fieldValue
    }))
    .filter(({ fieldName }) => {
      const isValid = !!fieldName.match(fieldValidator)
      if (!isValid) {
        console.warn(
          `Invalid field ${fieldName} passed to @digicatapult/ui-component-library Search component. Field will be excluded`
        )
      }
      return isValid
    })

  return moo.states({
    main: {
      fieldMatch: {
        match: fieldsArray.map((f) => `${f.fieldName}:`),
        value: (s) => s.slice(0, -1)
      },
      escape: /\\./,
      strstart: { match: '"', push: 'lit' },
      plusMinus: /[+-]/,
      char: /\S/,
      space: { match: /\s+/, lineBreaks: true }
    },
    lit: {
      escape: /\\./,
      strend: { match: /"(?:\s|$)/, pop: 1, lineBreaks: true },
      char: { match: /./, lineBreaks: true }
    }
  })
}

export const parseSearch = (lexer: moo.Lexer, search: string) => {
  const result: SearchTerm[] = []
  let token: moo.Token | undefined
  let type: 'term' | 'fieldMatch' = 'term'
  let field: string = ''
  let value: string = ''
  let modifier: 'positive' | 'negative' | null = null
  let isQuoted: boolean = false

  const maybeAppendToResult = () => {
    if (value) {
      result.push(
        type === 'term'
          ? {
              type,
              value,
              modifier,
              isQuoted
            }
          : {
              type,
              field,
              value,
              modifier,
              isQuoted
            }
      )
      type = 'term'
      field = ''
      value = ''
      modifier = null
      isQuoted = false
    }
  }

  lexer.reset(search)
  while ((token = lexer.next())) {
    switch (token.type) {
      case 'fieldMatch':
        type = token.type
        field = token.value
        value = ''
        break
      case 'plusMinus':
        modifier = token.value === '+' ? 'positive' : 'negative'
        break
      case 'char':
        value = value + token.value
        break
      case 'escape':
        value = value + token.value.slice(1)
        break
      case 'strend':
      case 'space':
        maybeAppendToResult()
        break
      case 'strstart':
        isQuoted = true
        break
    }
  }
  maybeAppendToResult()
  return result
}
