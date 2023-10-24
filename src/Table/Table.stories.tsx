import React from 'react'

import Table, { TableProps } from './index.js'

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    headers: {},
    rows: {},
  },
}

const DefaultStoryTemplate = (args: TableProps) => <Table {...args} />

export const Default = DefaultStoryTemplate.bind({})

Default.args = {
  headers: ['Timestamp', 'Subject', 'HTML'],
  rows: [
    ['2010-01-01T00:00:00.000Z', 'example-1', <p>paragraph</p>],
    ['2011-01-01T00:00:00.000Z', 'example-2', <button>button</button>],
    ['2012-01-01T00:00:00.000Z', 'example-3', <h3>heading #3</h3>],
  ],
}
