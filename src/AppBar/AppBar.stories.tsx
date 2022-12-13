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
    width: {
      control: {
        type: 'string',
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'inverted'],
      },
    },
  },
  args: {
    fixed: false,
    variant: 'default',
    width: '100%',
    children: [<div>1</div>, <div>2</div>],
  },
} as Meta<typeof AppBar>

export const Playground: Story<typeof AppBar> = (args) => <AppBar {...args} />
export const Default: Story<typeof AppBar> = () => <AppBar />
export const DefaultWithChildren: Story<typeof AppBar> = () => (
  <AppBar>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </AppBar>
)
