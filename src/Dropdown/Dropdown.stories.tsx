import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'

import Dropdown from './index.js'

export default {
  title: 'Components/Dropdown',
  parameters: {
    layout: 'centered',
  },
  component: Dropdown,
  argTypes: {
    placeholder: {
      control: {
        type: 'text',
      },
    },
    isMulti: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    placeholder: 'some placeholder',
    options: [
      {
        value: '1',
        label: 'option 1',
        color: 'rgba(128, 204, 114, 0.6)',
      },
      {
        value: '2',
        label: 'option 2',
        color: 'rgba(182, 239, 160, 0.6)',
        textColor: '#216968',
      },
      {
        value: '3',
        label: 'option 3',
        color: 'rgba(223, 230, 103, 0.6)',
        textColor: '#216968',
      },
      {
        value: '4',
        label: 'option 4',
        color: 'rgba(223, 230, 103, 0.6)',
        textColor: '#216968',
      },
    ],
  },
}

// TODO unify how we use storybook e.g. .bind or not
// across when we have move covereed in regards to components etc.
export const Default: Story<typeof Dropdown> = (args) => (
  <Dropdown
    theme={'default'}
    update={action('select')}
    {...args}
  />
)

export const Multi: Story<typeof Dropdown> = (args) => (
  <Dropdown
    theme={'default'}
    isMulti={true}
    update={action('select')}
    {...args}
  />
)

export const Hii: Story<typeof Dropdown> = (args) => {
  const selected = [
    {
      value: '4',
      label: 'option 4',
      color: 'rgba(223, 230, 103, 0.6)',
      textColor: '#216968',
    },
  ]

  return (
    <Dropdown
      theme={'hii'}
      selected={selected}
      update={action('select')}
      {...args}
    />
  )
}
