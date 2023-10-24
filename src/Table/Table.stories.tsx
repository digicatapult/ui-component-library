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
    [new Date().toISOString(), 'test-1', <h1>html element</h1>],
    [new Date().toISOString(), 'test-2', <p>paragraph</p>],
    [new Date().toISOString(), 'test-3', <button>button</button>],
  ],
}
