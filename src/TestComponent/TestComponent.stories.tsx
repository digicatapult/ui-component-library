import React from 'react'
import { TestComponent } from '../index.js'
import { Story } from '@storybook/react'

export default {
  title: 'Test Component',
  component: TestComponent,
}

export const DefaultStoryExpanded: Story = () => {
  return <TestComponent text="Hello" />
}
