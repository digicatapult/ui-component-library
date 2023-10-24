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
    [new Date().toISOString(), 'example-1', <p>paragraph</p>],
    [new Date().toISOString(), 'example-2', <button>button</button>],
    [new Date().toISOString(), 'example-3', <h3>heading #3</h3>],
  ],
}
