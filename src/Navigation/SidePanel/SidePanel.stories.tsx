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
  return (
    <SidePanel {...args}>
      <SidePanel.Item title="Heidi" subtitle={'The Hydrogen Producer'} />
      <SidePanel.Item title="Heidi" subtitle={'The Hydrogen Producer'} />
      <SidePanel.Item title="Heidi" subtitle={'The Hydrogen Producer'} />
    </SidePanel>
  )
}

export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  heading: 'Certificate Viewing (Hydrogen Producer)',
  width: 300,
}

export const HyProof = DefaultStoryTemplate.bind({})
HyProof.args = {}
