import React from 'react'
import { Meta, StoryFn } from '@storybook/react'

import AppBar from './index.js'

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
      },
      options: ['default', 'inverted'], // TODO  invert accent and primary colors
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

export const Default: StoryFn<typeof AppBar> = (props) => (
  <AppBar {...props}>
    <AppBar.Item active={true} href=".">
      item one
    </AppBar.Item>
    <AppBar.Item href=".">item two</AppBar.Item>
  </AppBar>
)
export const HII: StoryFn<typeof AppBar> = () => (
  <AppBar
    shadow={false}
    theme={{
      primary: '#27847A',
      accent: '#FFF',
    }}
  >
    <AppBar.Item active={true} href=".">
      what we do
    </AppBar.Item>
    <AppBar.Item href=".">maps</AppBar.Item>
    <AppBar.Item href=".">contact us</AppBar.Item>
  </AppBar>
)
