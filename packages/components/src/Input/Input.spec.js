import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Input from '.'

describe('Input', () => {
  test('default', () => {
    const tree = renderer.create(<Input label="default" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('monetary', () => {
    const tree = renderer
      .create(<Input label="money related" monetary />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
