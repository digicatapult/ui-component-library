import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import HelpContainer from './index.js'

describe('HelpContainer', () => {
  test('default', () => {
    const tree = renderer
      .create(<HelpContainer>Some content</HelpContainer>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('overrides', () => {
    const tree = renderer
      .create(
        <HelpContainer width="28ch" background="#FFF" tailPosition="bottomLeft">
          Some content
        </HelpContainer>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
