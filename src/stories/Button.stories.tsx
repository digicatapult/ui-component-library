import React from 'react'
import { Button } from '../index.js'
import { Story } from "@storybook/react"

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { name: 'label', description: 'button text' },
    style: {
      name: 'style',
      description:
        'Style object will be passed as inline style as default behaviour of react elements. You can also use styled-components instead of this property which will also overwrite the default styles.',
    },
    variant: {
      name: 'variant',
    },
  },
}

const Template = (args: any) => <Button {...args} />

export const Primary: Story = Template.bind({})
Primary.args = {}

export const Outlined: Story = Template.bind({})
Outlined.args = { variant: 'outlined' }

export const Text: Story = Template.bind({})
Text.args = { variant: 'text' }

export const Disabled: Story = Template.bind({})
Disabled.args = { disabled: true }
