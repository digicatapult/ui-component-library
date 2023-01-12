import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Tooltip from './index.js'

describe('Tooltip', () => {
  test('default', () => {
    const tree = renderer.create(<Tooltip>Some content</Tooltip>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('overrides', () => {
    const tree = renderer
      .create(
        <Tooltip width="28ch" background="#FFF" leftOrRight="left">
          Some content
        </Tooltip>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
