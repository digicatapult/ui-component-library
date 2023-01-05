import React from 'react'
import { action } from '@storybook/addon-actions'
import { Story } from '@storybook/react'
import { Expression } from 'mapbox-gl'

import Map from './index.js'
import colors from '../colors.js'

import exampleJson from './example.json'
import hiiJson from './hii.json'

export default {
  title: 'Components/Map',
  component: Map,
  argTypes: {
    sourceJson: {
      control: 'object',
    },
    style: {
      control: 'text',
      table: {
        category: 'Initial state',
      },
    },
    height: {
      control: 'text',
      table: {
        category: 'Initial state',
      },
    },
    width: {
      control: 'text',
      table: {
        category: 'Initial state',
      },
    },
    startPositionLong: {
      control: 'number',
      table: {
        category: 'Initial state',
      },
    },
    startPositionLat: {
      control: 'number',
      table: {
        category: 'Initial state',
      },
    },
    startPositionZoom: {
      control: 'number',
      table: {
        category: 'Initial state',
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
        category: 'Point',
      },
    },
    pointRadius: {
      control: 'number',
      table: {
        category: 'Point',
      },
    },
    onClickZoomIn: {
      control: 'number',
      table: {
        category: 'Point',
      },
    },
  },
}

const pointColourExpression: Expression = [
  'match',
  ['get', 'Project Type'],
  'Feasability Study',
  '#27847A',
  'Funding/Competition',
  '#80CC72',
  'Testing & certification',
  '#B6EFA0',
  'Innovation programme',
  '#DFE667',
  'R&D facility',
  '#C8B88A',
  'Government strategy',
  '#F1DDDF',
  '#27847A',
]

const Template: Story = (args) => {
  const props = {
    token: process.env.STORYBOOK_MAPBOX_TOKEN || '',
    sourceJson: args.sourceJson,
    initialState: {
      long: args.startPositionLong,
      lat: args.startPositionLat,
      zoom: args.startPositionZoom,
      height: args.height,
      width: args.width,
      style: args.style,
    },
    cluster: args.cluster,
    clusterOptions: {
      clusterMaxZoom: args.clusterMaxZoom,
      clusterAreaRadius: args.clusterAreaRadius,
      clusterColor: args.clusterColor,
      clusterRadius: args.clusterRadius,
      countFont: args.countFont,
      countFontSize: args.countFontSize,
      countFontColor: args.countFontColor,
    },
    pointOptions: {
      pointExpression: args.pointExpression,
      pointColor: args.pointColor,
      pointRadius: args.pointRadius,
      onPointClick: action('click'),
      onClickZoomIn: args.onClickZoomIn,
    },
  }

  return <Map {...props} />
}

export const Cluster = Template.bind({})
Cluster.args = {
  sourceJson: exampleJson,
  cluster: true,
  clusterColor: colors.green,
  clusterRadius: 15,
  pointColor: colors.green,
  pointRadius: 4,
}

export const NoCluster = Template.bind({})
NoCluster.args = {
  sourceJson: exampleJson,
}

export const HIIPointColour = Template.bind({})
HIIPointColour.args = {
  sourceJson: hiiJson,
  pointExpression: pointColourExpression,
  pointRadius: 4,
}
