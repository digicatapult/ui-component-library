import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import AppBar from './index.tsx'

describe('AppBar', () => {
  test('default', () => {
    const tree = renderer
      .create(
        <AppBar>
          <AppBar.Item active={true}>what we do</AppBar.Item>
          <AppBar.Item>maps</AppBar.Item>
          <AppBar.Item>contact us</AppBar.Item>
        </AppBar>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
