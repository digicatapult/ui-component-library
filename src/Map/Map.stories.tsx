import React from 'react'

import Map from './index'
import exampleJson from './example.json'
import colors from '../colors'

export default {
  title: 'Map Component',
  component: Map,
  argTypes: {
    sourceJson: {
      control: 'text',
    },
    style: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    width: {
      control: 'text',
    },
    startPositionLong: {
      control: 'number',
      table: {
        category: 'Start Position',
      },
    },
    startPositionLat: {
      control: 'number',
      table: {
        category: 'Start Position',
      },
    },
    startPositionZoom: {
      control: 'number',
      table: {
        category: 'Start Position',
      },
    },
    cluster: {
      control: 'boolean',
      table: {
        category: 'Clustering',
      },
    },
    clusterMaxZoom: {
      control: 'number',
      table: {
        category: 'Clustering',
      },
    },
    clusterAreaRadius: {
      control: 'number',
      table: {
        category: 'Clustering',
      },
    },
    clusterColor: {
      control: 'color',
      table: {
        category: 'Clustering',
      },
    },
    clusterRadius: {
      control: 'number',
      table: {
        category: 'Clustering',
      },
    },
    countFont: {
      control: 'array',
      table: {
        category: 'Clustering',
      },
    },
    countFontSize: {
      control: 'number',
      table: {
        category: 'Clustering',
      },
    },
    countFontColor: {
      control: 'color',
      table: {
        category: 'Clustering',
      },
    },
    pointColor: {
      control: 'color',
      table: {
        category: 'Clustering',
      },
    },
    pointRadius: {
      control: 'number',
      table: {
        category: 'Clustering',
      },
    },
  },
}

const Template = (args) => {
  const props = {
    token: process.env.STORYBOOK_MAPBOX_TOKEN,
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
