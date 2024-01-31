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

const fixtures = [
  {
    id: 'heidi',
    title: 'Heidi Heidi',
    subtitle: 'The Hydrogen Producer',
    background: '#AAED93',
  },
  {
    id: 'emma',
    title: 'Emma Connor',
    subtitle: 'The Energy Consumer',
    background: '#FDB6D4',
  },
  {
    id: 'reginald',
    title: 'Reginald Reg',
    subtitle: 'The Regulator',
    background: '#FCF281',
  },
]

const DefaultStoryTemplate = (args: SidePanelProps) => {
  return (
    <SidePanel {...args}>
      {fixtures.map((item) => (
        <SidePanel.Item {...item} />
      ))}
    </SidePanel>
  )
}

export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  orientation: 'left',
  heading: 'Certificate Viewing (Hydrogen Producer)',
  width: 400,
}

export const HyProof = DefaultStoryTemplate.bind({})
HyProof.args = {}
