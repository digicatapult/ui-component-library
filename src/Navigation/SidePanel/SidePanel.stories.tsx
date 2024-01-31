import React from 'react'

import SidePanel, { SidePanelProps } from './index.js'

export default {
  title: 'Components/Navigation/SidePanel',
  component: SidePanel,
  argTypes: {
    heading: {
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

const DefaultStoryTemplate = (args: SidePanelProps) => {
  return <SidePanel {...args} />
}

export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  color: '#a7a7a7',
  heading: 'Certificate Viewing (Hydrogen Producer)',
  width: 250,
}

export const HyProof = DefaultStoryTemplate.bind({})
HyProof.args = {
  color: '#33e58c',
  text: 'this is hyproof SidePanel example',
}
