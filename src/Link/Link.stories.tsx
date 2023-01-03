import React from 'react'
import { Story } from '@storybook/react'

import Link from './index'

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

const DefaultStoryTemplate: Story = (args) => {
  return (
    <Link
      text={args.text}
      href={args.href}
      openInNewTab={args.openInNewTab}
      color={args.color}
      visitedColor={args.visitedColor}
      iconHeight={args.iconHeight}
      iconMargin={args.iconMargin}
    />
  )
}
export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  text: 'Digital Catapult',
  href: 'https://www.digicatapult.org.uk/',
}
export const HII = DefaultStoryTemplate.bind({})
HII.args = {
  text: 'Link to project',
  href: 'https://gtr.ukri.org/projects?ref=EP%2FG06279X%2F1',
}
