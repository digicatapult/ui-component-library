import React from 'react'
import {EyeClosedIcon, EyeIcon, SearchIcon, XIcon, HeartIcon} from '@primer/octicons-react'
import {Story, Meta} from '@storybook/react'
import {IconButton} from '.'
import {OcticonArgType} from '../utils/story-helpers'

export default {
  title: 'Components/IconButton',
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    variant: {
      control: {
        type: 'radio',
        options: ['default', 'primary', 'danger', 'invisible'],
      },
    },
    icon: OcticonArgType([EyeClosedIcon, EyeIcon, SearchIcon, XIcon, HeartIcon]),
  },
  args: {
    size: 'medium',
    disabled: false,
    variant: 'default',
    'aria-label': 'Icon button description',
    icon: XIcon,
  },
} as Meta<typeof IconButton>

export const Playground: Story<typeof IconButton> = args => <IconButton {...args} />
