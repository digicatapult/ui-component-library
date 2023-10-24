import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Table from './index.js'

describe('Table', () => {
  test('default', () => {
    const instance = renderer.create(
      <Table
        headers={['Timestamp', 'Subject', 'HTML']}
        rows={[
          [new Date().toISOString(), 'test-1', <h1>html element</h1>],
          [new Date().toISOString(), 'test-2', <p>paragraph</p>],
          [new Date().toISOString(), 'test-3', <button>button</button>],
        ]}
      />,
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
