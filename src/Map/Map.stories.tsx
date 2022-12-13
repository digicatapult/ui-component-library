import React from 'react'

import Map from './index'
import exampleJson from './example.json'
import colors from '../colors'

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
    clusterAreaRadius: {
      control: {
        type: 'number',
      },
    },
    clusterColor: {
      control: {
        type: 'color',
      },
    },
    clusterRadius: {
      control: {
        type: 'number',
      },
    },
    countFont: {
      control: {
        type: 'array',
      },
    },
    countFontSize: {
      control: {
        type: 'number',
      },
    },
    countFontColor: {
      control: {
        type: 'color',
      },
    },
    sourceJson: {
      control: {
        type: 'text',
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
      clusterMaxZoom: args.clusterMaxZoom,
      clusterAreaRadius: args.clusterAreaRadius,
      clusterColor: args.clusterColor,
      clusterRadius: args.clusterRadius,
      countFont: args.countFont,
      countFontSize: args.countFontSize,
      countFontColor: args.countFontColor,
      pointColor: args.pointColor,
      pointRadius: args.pointRadius,
    },
    style: args.style,
    sourceJson: args.sourceJson,
  }

  return <Map {...props} />
}
export const Default = Template.bind({})

Default.args = {
  sourceJson: exampleJson,
  clusterColor: colors.green,
  clusterRadius: 14,
  pointColor: colors.green,
  pointRadius: 4,
}
