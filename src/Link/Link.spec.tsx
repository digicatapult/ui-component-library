import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Link from './index.js'

describe('Link', () => {
  test('default', () => {
    const tree = renderer.create(<Link text="test link" href="/" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('overrides', () => {
    const tree = renderer
      .create(
        <Link
          text="test link"
          href="/"
          openInNewTab={false}
          color="blue"
          visitedColor="purple"
          iconHeight="0.5em"
          iconMargin="0"
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
