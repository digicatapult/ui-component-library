import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import ListCard from './index.tsx'

describe('Test', () => {
  test('default', () => {
    const tree = renderer.create(<ListCard text="Hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
