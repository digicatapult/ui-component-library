import React, { BaseSyntheticEvent } from 'react'
import { action } from '@storybook/addon-actions'

import Timeline, { TimelineProps } from './index.js'

export default {
  title: 'Components/Timeline',
  component: Timeline,
  argTypes: {
    variant: {
      options: ['default', 'hyproof'],
      control: { type: 'radio' },
    },
    name: {
      default: 'aaa',
      control: 'text',
    },
  },
}

const items: Array<{
  title: string
  message?: string
  status?: 'pending' | 'completed' | 'calculating' | 'submitted'
  checked?: boolean
}> = [
  {
    title: 'A process has started',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    checked: true,
    status: 'completed',
  },
  {
    title: 'Feedback request sent',
    checked: true,
    status: 'submitted',
    message: new Date().toISOString(),
  },
  {
    title: 'Awaiting feedback',
    status: 'pending',
  },
  {
    title: 'Acknowledged',
    status: 'pending',
  },
]

const DefaultStoryTemplate = (props: TimelineProps) => (
  <Timeline {...props}>
    {items.map(({ message, ...rest }) => (
      <Timeline.Item
        key={rest.title}
        {...props}
        {...rest}
      >
        {message && <p>{message}</p>}
      </Timeline.Item>
    ))}
  </Timeline>
)

export const Default = DefaultStoryTemplate.bind({})

Default.args = {
  variant: 'default',
  name: 'default timeline',
}

export const HyProof = DefaultStoryTemplate.bind({})
HyProof.args = {
  name: 'hyproof variant',
  variant: 'hyproof',
}
