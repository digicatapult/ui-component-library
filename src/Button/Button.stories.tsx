import React from 'react'
import { action } from '@storybook/addon-actions'

import Button, { ButtonTextProps } from './index.js'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'click' },
    name: {
      control: 'text',
    },
    variant: {
      control: {
        type: 'select',
      },
      options: [
        null,
        'rounded',
        'square',
        'roundedShadow',
        'squareShadow',
        'roundedPronounced',
        'roundedPronouncedShadow',
      ],
    },
  },
}

const DefaultStoryTemplate = (args: ButtonTextProps) => {
  return (
    <Button
      onClick={(e) => {
        action('submit')(e)
      }}
      {...args}
    >
      press me
    </Button>
  )
}

export const Default = DefaultStoryTemplate.bind({})

Default.args = {
  type: 'submit',
  variant: null,
}
