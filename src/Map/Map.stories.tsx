import React from 'react'
import { Story } from '@storybook/react'
import styled from 'styled-components'

import Map from './index'

export default {
  title: 'Map Component',
  component: Map,
  argTypes: {
    height: {
      control: {
        type: 'text',
      },
    },
    width: {
      control: {
        type: 'text',
      },
    },
    startPositionLong: {
      control: {
        type: 'number',
      },
    },
    startPositionLat: {
      control: {
        type: 'number',
      },
    },
    startPositionZoom: {
      control: {
        type: 'number',
      },
    },
    style: {
      control: {
        type: 'text',
      },
    },
    clusterMaxZoom: {
      control: {
        type: 'number',
      },
    },
    clusterRadius: {
      control: {
        type: 'number',
      },
    },
  },
}

const Template = (args) => {
  const props = {
    startPosition: {
      long: args.startPositionLong,
      lat: args.startPositionLat,
      zoom: args.startPositionZoom,
    },
    size: {
      height: args.height,
      width: args.width,
    },
    clusterOptions: {
      maxZoom: args.clusterMaxZoom,
      radius: args.clusterRadius,
    },
    style: args.style,
  }

  return <Map {...props} />
}
export const Default = Template.bind({})

Default.args = {}
