import React, { useState } from 'react'
import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import ToggleButton from './index.js'

export default {
  title: 'Components/ToggleButton',
  component: ToggleButton,
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
    isOpen: {
      control: 'boolean',
    },
    openBackground: {
      control: 'color',
    },
    closeBackground: {
      control: 'color',
    },
    openContent: {
      control: 'text',
    },
    closeContent: {
      control: 'text',
    },
    fontColor: {
      control: 'color',
    },
    fontWeight: {
      control: 'text',
    },
  },
}

const DefaultStoryTemplate: Story = (args) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => setIsOpen(!isOpen)

  return <ToggleButton onClick={onClick} isOpen={isOpen} {...args} />
}

export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  height: '40px',
  width: '80px',
  closeBackground: 'lightyellow',
  borderRadius: '1em',
  closeContent: 'Help',
  openContent: 'Close',
}
export const HII = DefaultStoryTemplate.bind({})
HII.args = {
  height: '2.5em',
  width: '2.5em',
  closeBackground: '#27847A',
  openBackground: '#000',
  borderRadius: '1.25em',
  fontColor: '#FFF',
  fontWeight: 'bold',
}
