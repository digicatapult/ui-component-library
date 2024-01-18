import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Timeline from './index.js'

describe('Timeline', () => {
  describe('default', () => {
    test('renders basic Timeline with a single Timeline.Item', () => {
      const tree = renderer.create(
        <Timeline>
          <Timeline.Item
            title="timeline-item-basic"
            checked={false}
          ></Timeline.Item>
        </Timeline>,
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('renders mixture of timelines complete/not-complete', () => {
      const tree = renderer.create(
        <Timeline>
          <Timeline.Item
            title="timeline-item-not-complete"
            checked={false}
          >
          </Timeline.Item>
          <Timeline.Item
            title="timeline-item-complete"
            checked={true}
          >
            <h1>header</h1>
          </Timeline.Item>
        </Timeline>,
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })

    test('renders timeline items with multiple children', () => { 
      const tree = renderer.create(
        <Timeline name='default'>
          <Timeline.Item
            title="timeline-item-1"
            checked={true}
          >
            <button>test me</button>
            <p>some paragraph</p>
            <h1>some header</h1>
            <div>some div</div>
            <span>some span</span>
          </Timeline.Item>
          <Timeline.Item
            title="timeline-item-2"
            checked={true}
          >
            <h2>header</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Timeline.Item>
        </Timeline>
      ).toJSON()
      expect(tree).toMatchSnapshot()
    })
    test('renders text block if no children present in Timeline.Item', () => {
      const tree = renderer.create(
        <Timeline>
          <Timeline.Item
            title="timeline-item-3"
            checked={false}
          ></Timeline.Item>
        </Timeline>,
      ).toJSON()
      expect(tree).toMatchSnapshot() 
    })
  })
})
