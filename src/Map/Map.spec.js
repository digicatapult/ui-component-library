import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Map from './index.tsx'

describe('Map', () => {
  test('simple', () => {
    const tree = renderer
      .create(<Map token={process.env.STORYBOOK_MAPBOX_TOKEN} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
