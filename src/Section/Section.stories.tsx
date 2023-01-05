import React from 'react'
import { Story } from '@storybook/react'

import Section from './index.js'

export default {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    content: {
      control: {
        type: 'text',
      },
    },
    headingLevel: {
      control: {
        type: 'select',
        options: [1, 2, 3, 4, 5, 6],
      },
    },
    background: {
      control: {
        type: 'text',
      },
    },
    width: {
      control: {
        type: 'text',
      },
    },
    height: {
      control: {
        type: 'text',
      },
    },
    padding: {
      control: 'text',
    },
    headingSize: {
      control: 'text',
    },
    gap: {
      control: 'text',
    },
  },
}

const DefaultStoryTemplate: Story = (args) => {
  return (
    <Section
      headingLevel={args.headingLevel}
      title={args.text}
      width={args.width}
      height={args.height}
      padding={args.padding}
      headingGap={args.gap}
      headingSize={args.headingSize}
      background={args.background}
    >
      {args.content}
    </Section>
  )
}
export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  headingLevel: 1,
  text: 'Hello',
  content: 'Some content',
}
export const HII = DefaultStoryTemplate.bind({})
HII.args = {
  headingLevel: 3,
  text: 'Project Details',
  content:
    'Scope / goal - The £33 million Low Carbon Hydrogen Supply competition aimed to accelerate the development of low carbon bulk hydrogen supply solutions in specific sectors. It was aimed at projects at a TRL of 4 to 7, which could result in lower capital or operating costs when compared to Steam Methane Reformation with Carbon Capture & Storage (SMR+CCS), or improve the carbon capture rates at a comparable cost.',
  width: '47ch',
  height: 'auto',
  padding: '1ch 4ch',
  headingSize: '1.2em',
  gap: '2ch',
  background: '#DFE667',
}
