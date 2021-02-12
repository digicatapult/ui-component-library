import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import TextArea from '.'

describe('TextArea', () => {
  test('default', () => {
    const tree = renderer.create(<TextArea label="label" id="test" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
