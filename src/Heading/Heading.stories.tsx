import React from 'react'
import { HX } from './Heading'
import { Story } from '@storybook/react'

export default {
  title: 'Components/Heading',
  component: HX,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    headingLevel: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6],
      },
    },
  },
}

const DefaultStoryTemplate: Story = (args) => {
  return <HX headingLevel={args.headingLevel}>{args.text}</HX>
}
export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  headingLevel: 1,
  text: 'Hello',
}
