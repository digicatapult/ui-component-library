import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Card from '.'

const date = new Date('December 17, 1995 03:24:00')

describe('Card', () => {
  test('default', () => {
    const tree = renderer
      .create(
        <Card
          title="Card story"
          name="Story Writer"
          date={date}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Sem et tortor consequat id porta. Viverra nam libero justo laoreet sit."
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
