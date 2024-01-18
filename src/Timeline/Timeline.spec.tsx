import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Timeline from './index.js'

describe.only('Timeline', () => {
  test('default', () => {
    const tree = renderer.create(
      <Timeline>
        <Timeline.Item
          title="test"
          checked={false}
        >
        </Timeline.Item>
      </Timeline>,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
