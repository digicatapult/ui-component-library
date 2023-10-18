import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Input from './index.js'

describe('Input', () => {
  test('text', () => {
    const instance = renderer.create(<Input type="text" name="text-c" />)
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('hidden', () => {
    const instance = renderer.create(<Input type="hidden" name="hidden-b" />)
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('style overrides', () => {
    const instance = renderer.create(
      <Input
        type="text"
        name="override-a"
        styles={{ height: '100px', background: 'red' }}
      />,
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
