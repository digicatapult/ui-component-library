import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import SidePanel from './index.js'

describe('SidePanel', () => {
  test('default', () => {
    const instance = renderer.create(<SidePanel />)
    const tree = instance.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
