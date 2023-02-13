import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Toggle from './index.js'

export default {
  title: 'Components/Toggle',
  component: Toggle,
  argTypes: {
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    borderRadius: {
      control: 'text',
    },
    padding: {
      control: 'number',
    },
    offBackground: {
      control: 'color',
    },
    onBackground: {
      control: 'color',
    },
    buttonColor: {
      control: 'color',
    },
  },
}

const DefaultStoryTemplate: Story = (args) => {
  return <Toggle onChange={action('change')} {...args} />
}

export const Default = DefaultStoryTemplate
export const Square = DefaultStoryTemplate.bind({})
Square.args = {
  borderRadius: '0',
}

export const ControlledInput: Story = (args) => {
  const [isChecked, setIsChecked] = useState(true)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked)
  }

  return <Toggle onChange={onChange} checked={isChecked} {...args} />
}
