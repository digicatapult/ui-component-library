import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import HelpDiv from './index.js'

describe('HelpDiv', () => {
  test('default', () => {
    const tree = renderer.create(<HelpDiv>Some content</HelpDiv>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('overrides', () => {
    const tree = renderer
      .create(
        <HelpDiv width="28ch" background="#FFF" leftOrRight="left">
          Some content
        </HelpDiv>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
