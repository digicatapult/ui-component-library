import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import QRReader from './index.js'
import { styled } from 'styled-components'
import React from 'react'

export default {
  title: 'Components/QRReader',
  component: QRReader,
  argTypes: {
    scanDelay: {
      control: {
        type: 'range',
        min: 0,
        max: 2000,
        step: 100,
      },
      defaultValue: { summary: '500' },
      description: 'Interval to check for QR codes in ms',
    },
    viewFinderVariant: {
      control: {
        type: 'select',
      },
      options: ['viewfinder-cross-med', 'viewfinder-none'],
      defaultValue: { summary: 'viewfinder-cross-med' },
      description: 'Variant of the control',
    },
    viewFinderColor: {
      control: { type: 'color' },
      defaultValue: { summary: '#555555' },
      description: 'Color of the viewfinder',
    },
  },
} as Meta<typeof QRReader>

export const Default: StoryObj<typeof QRReader> = {
  render: (props) => {
    return <QRStyled {...props} />
  },
  args: {
    onResult: action('result'),
  },
}

export const Veritable: StoryObj<typeof QRReader> = {
  ...Default,
  args: {
    onResult: action('result'),
    viewFinderVariant: 'viewfinder-cross-med',
    viewFinderColor: 'rgb(50, 50, 50)',
    scanDelay: 500,
  },
}

export const NoViewFinder: StoryObj<typeof QRReader> = {
  ...Default,
  args: {
    onResult: action('result'),
    viewFinderVariant: 'viewfinder-none',
  },
}

const QRStyled = styled(QRReader)`
  width: 400px;
`
