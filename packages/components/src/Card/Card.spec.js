import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Card from '.'

describe('Card', () => {
  test('default', () => {
    const tree = renderer
      .create(
        <Card
          data={{
            title: 'Card story',
            editors: [{ firstName: 'Story Writer' }],
            start: 1613384947838,
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Sem et tortor consequat id porta. Viverra nam libero justo laoreet sit.'
          }}
          handleClick={() => {}}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
