import React from 'react'
import { Story } from '@storybook/react'

import TestComponent from './index.js'

export default {
  title: 'Components/Test',
  component: TestComponent,
}

const DefaultStoryTemplate: Story = (args) => {
  return <TestComponent text={args.text} />
}
export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  text: 'Hello',
}
