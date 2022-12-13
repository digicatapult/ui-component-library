import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Search from './index.tsx'

describe('Test', () => {
  test('default', () => {
    const tree = renderer.create(<Search text="Hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
