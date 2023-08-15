import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import QRReader from './index.js'
import { styled } from 'styled-components'
import React from 'react'

export default {
  title: 'Components/QRReader',
  component: QRReader,
  argTypes: {
    showViewfinder: {
      controlType: 'boolean',
      defaultValue: true,
      description: 'Whether to show the viewfinder',
      type: 'boolean',
    },
  },
} as Meta<typeof QRReader>

export const Default: StoryObj<typeof QRReader> = {
  render: (props) => {
    return <QRStyled {...props} />
  },
  args: {
    onResult: action('result'),
    showViewfinder: true,
  },
}

const QRStyled = styled(QRReader)`
  width: 400px;
`
