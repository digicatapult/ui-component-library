import React from 'react'

import Input, { InputTextProps } from './index.js'

export default {
  title: 'Components/HelpContainer',
  component: Input,
  argTypes: {
    name: {
      control: 'text',
    },
    type: {
      options: ['text', 'hidden'],
      control: { type: 'radio' },
    },
  },
}

const DefaultStoryTemplate = (args: InputTextProps) => <Input {...args} />

export const Default = DefaultStoryTemplate.bind({})

Default.args = {
  name: 'default',
  type: 'text',
}
