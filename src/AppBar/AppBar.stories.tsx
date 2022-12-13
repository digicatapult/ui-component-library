import React from 'react'
import { Story, Meta } from '@storybook/react'

import AppBar from './index'

export default {
  title: 'Components/AppBar',
  component: AppBar,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    fixed: {
      control: {
        type: 'boolean',
      },
    },
    color: {
      control: {
        type: 'text',
      },
    },
    width: {
      control: {
        type: 'text',
      },
    },
    search: {
      control: {
        type: 'boolean',
      },
    },
    shadow: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'inverted'], // TODO  invert accent and primarhy colors
      },
    },
  },
  args: {
    fixed: false,
    color: '#FFA',
    variant: 'default',
    width: '100%',
    shadow: true,
    search: false,
    children: [
      <AppBar.Item>item one</AppBar.Item>,
      <AppBar.Item>item two</AppBar.Item>,
    ],
  },
} as Meta<React.ComponentProps<typeof AppBar>>

export const Playground: Story<typeof AppBar> = (args) => <AppBar {...args} />

// TODO replace children with app bar items
export const HII: Story<typeof AppBar> = () => (
  <AppBar
    shadow={false}
    theme={{
      primary: '#27847A',
      accent: '#FFF',
    }}
  >
    <AppBar.Item>what we do</AppBar.Item>
    <AppBar.Item>maps</AppBar.Item>
    <AppBar.Item>contact us</AppBar.Item>
  </AppBar>
)
