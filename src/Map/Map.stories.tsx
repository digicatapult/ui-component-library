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
    cluster: {
      control: {
        type: 'boolean',
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
    size: {
      height: args.height,
      width: args.width,
    },
    startPosition: {
      long: args.startPositionLong,
      lat: args.startPositionLat,
      zoom: args.startPositionZoom,
    },
    style: args.style,
    sourceJson: args.sourceJson,
    cluster: args.cluster,
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
  }

  return <Map {...props} />
}

export const Cluster = Template.bind({})
Cluster.args = {
  sourceJson: exampleJson,
  cluster: true,
  clusterColor: colors.green,
  clusterRadius: 14,
  pointColor: colors.green,
  pointRadius: 4,
}

export const NoCluster = Template.bind({})
NoCluster.args = {
  sourceJson: exampleJson,
}
