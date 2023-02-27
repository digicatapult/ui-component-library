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
    variant: {
      control: {
        type: 'select',
        options: ['default', 'hii'],
      },
    },
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
    isSearchable: {
      control: {
        type: 'boolean',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
  },
  args: {
    label: null,
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

const DefaultStoryTemplate: Story = (args) => (
  <Dropdown
    placeholder={args.placeholder} // so silly that spread does not work as it should... as ts complains - define me please
    options={args.options}
    variant={args.variant}
    label={args.label}
    update={action('select')}
    minWidth="275px"
    minHeight="95px"
  />
)

export const Default = DefaultStoryTemplate.bind({})

export const Labelled = DefaultStoryTemplate.bind({})
Labelled.args = {
  label: "i'm a label",
}

export const Multi = DefaultStoryTemplate.bind({})
Multi.args = {
  isMulti: true,
}

export const Searchable = DefaultStoryTemplate.bind({})
Searchable.args = {
  label: 'Search me',
  isSearchable: true,
}

export const PreselectedExample = DefaultStoryTemplate.bind({})
PreselectedExample.args = {
  isMulti: true,
  selected: [
    {
      value: '4',
      label: 'option 4',
      color: 'rgba(223, 230, 103, 0.6)',
      textColor: '#216968',
    },
  ],
}

export const HII = DefaultStoryTemplate.bind({})
HII.args = {
  label: 'TYPE OF PROJECT',
  variant: 'hii',
}
