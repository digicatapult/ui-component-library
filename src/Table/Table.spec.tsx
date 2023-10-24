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
          ['2010-01-01T00:00:00.000Z', 'example-1', <p>paragraph</p>],
          ['2011-01-01T00:00:00.000Z', 'example-2', <button>button</button>],
          ['2012-01-01T00:00:00.000Z', 'example-3', <h3>heading #3</h3>],
        ]}
      />,
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
