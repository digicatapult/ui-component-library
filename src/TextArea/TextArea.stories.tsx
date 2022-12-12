import React from 'react'
import { TextArea } from '../index.js'
import { Story } from '@storybook/react'

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {},
}

const Template = (args: any) => <TextArea {...args} />

export const Default: Story = Template.bind({})
Default.args = { label: 'label', id: 'default' }

export const ErrorMessage: Story = Template.bind({})
ErrorMessage.args = {
  label: 'label',
  id: 'error-message',
  error: 'required field',
}
