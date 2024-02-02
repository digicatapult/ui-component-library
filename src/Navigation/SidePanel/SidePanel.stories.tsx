import React from 'react'
import { action } from '@storybook/addon-actions'

import SidePanel, { SidePanelProps } from './index.js'
import { hyproof, basic } from './fixtures.js'

const fixtures = { hyproof, default: basic }

export default {
  title: 'Components/Navigation/SidePanel',
  component: SidePanel,
  argTypes: {
    variant: {
      options: ['default', 'hyproof'],
      control: { type: 'radio' },
    },
    update: { action: 'submit' },
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
  const [current, setCurrent] = React.useState({})

  return (
    <SidePanel {...args} {...current} callback={action('open')}>
      {fixtures[args.variant || 'default'].map((item) => (
        <SidePanel.Item
          {...args}
          update={(name, persona) => {
            setCurrent({ current: name, ...persona })
          }}
          key={item.name}
          {...item}
        />
      ))}
    </SidePanel>
  )
}

export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  variant: 'default',
  heading: 'Basic Side Panel',
  width: 300,
}

export const HyProof = DefaultStoryTemplate.bind({})
HyProof.args = {
  variant: 'hyproof',
  heading: 'HyProof Certificate Viewing',
  width: 400,
}