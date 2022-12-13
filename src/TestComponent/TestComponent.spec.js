import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import TestComponent from './index.tsx'

describe('Test', () => {
  test('default', () => {
    const tree = renderer.create(<TestComponent text="Hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
