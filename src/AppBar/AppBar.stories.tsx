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
    color: '#FFFE',
    variant: 'default',
    width: '100%',
    shadow: true,
  },
} as Meta<React.ComponentProps<typeof AppBar>>

export const Default: Story<typeof AppBar> = (props) => (
  <AppBar {...props}>
    <AppBar.Item active={true}>item one</AppBar.Item>
    <AppBar.Item>item two</AppBar.Item>
  </AppBar>
)
export const HII: Story<typeof AppBar> = () => (
  <AppBar
    shadow={false}
    theme={{
      primary: '#27847A',
      accent: '#FFF',
    }}
  >
    <AppBar.Item active={true}>what we do</AppBar.Item>
    <AppBar.Item>maps</AppBar.Item>
    <AppBar.Item>contact us</AppBar.Item>
  </AppBar>
)
