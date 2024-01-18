import React from 'react'
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
    action: { action: 'click' },
    name: {
      control: 'text',
    },
  },
}

const items = [
  {
    title: 'A process has started',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    checked: true,
    subStatus: 'completed',
    action: action('click'),
  },
  {
    title: 'Awaiting feedback',
    checked: false,
    action: action('click'),
  },
  {
    title: 'Acknowledged',
    checked: false,
    action: action('click'),
  },
]

const DefaultStoryTemplate = (args: TimelineProps) => (
  <Timeline {...args} name={'default'}>
    {items.map(({ message, subStatus, ...props }) => (
      <Timeline.Item {...props} variant='hyproof'>{message && <p>{message}</p>}</Timeline.Item>
    ))} 
  </Timeline>
)

export const Default = DefaultStoryTemplate.bind({})

Default.args = {
  type: 'submit',
}
