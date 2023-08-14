import React from 'react'
import { Story, StoryObj } from '@storybook/react'

import Link from './index.js'

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    text: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
    openInNewTab: {
      control: 'boolean',
    },
    color: {
      control: 'color',
    },
    visitedColor: {
      control: 'color',
    },
    iconHeight: {
      control: 'text',
    },
    iconMargin: {
      control: 'text',
    },
  },
}

export const Default: StoryObj = {
  args: {
    text: 'Digital Catapult',
    href: 'https://www.digicatapult.org.uk/',
  },
}
export const HII: StoryObj = {
  args: {
    text: 'Link to project',
    href: 'https://gtr.ukri.org/projects?ref=EP%2FG06279X%2F1',
  },
}
