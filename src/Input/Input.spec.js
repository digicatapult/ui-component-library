import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Input from './index.js'

describe('Input', () => {
  test('default', () => {
    const tree = renderer
      .create(<Input id="default" label="default" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('monetary', () => {
    const tree = renderer
      .create(<Input label="money related" id="value" monetary />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
