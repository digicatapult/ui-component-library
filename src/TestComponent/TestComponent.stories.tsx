import React from 'react'
import { TestComponent } from '../index.js'
import { Story } from '@storybook/react'

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
