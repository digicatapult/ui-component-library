import React from 'react'

import Spinner, { SpinnerProps } from './index.js'

export default {
  title: 'Components/Animations/Spinner',
  component: Spinner,
  argTypes: {
    text: {
      control: 'text',
    },
    color: {
      control: {
        type: 'select',
      },
      options: ['#a7a7a7', '#fff', '#00ff00', '#33e58c', 'red'],
    },
  },
}

const DefaultStoryTemplate = (args: SpinnerProps) => {
  return <Spinner {...args} />
}

export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  color: '#a7a7a7',
}

export const Small = DefaultStoryTemplate.bind({})
Small.args = {
  size: 'small',
  text: 'this is small spinner example',
}

export const Medium = DefaultStoryTemplate.bind({})
Medium.args = {
  size: 'medium',
  text: 'this is medium spinner example',
}
export const Large = DefaultStoryTemplate.bind({})
Large.args = {
  size: 'large',
  text: 'this is large spinner example',
}

export const HyProof = DefaultStoryTemplate.bind({})
HyProof.args = {
  color: '#33e58c',
  text: 'this is hyproof spinner example',
}
