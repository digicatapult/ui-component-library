import React from 'react'
import { ListCard } from '../index.js'
import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

export default {
  title: 'Components/ListCard',
  component: ListCard,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    subtitle: {
      control: {
        type: 'text',
      },
    },
    orientation: {
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
    flashColor: {
      control: {
        type: 'text',
      },
    },
    background: {
      control: {
        type: 'text',
      },
    },
  },
}

const DefaultStoryTemplate: Story = (args) => {
  return (
    <ListCard
      title={args.title}
      subtitle={args.subtitle}
      orientation={args.orientation}
      flashColor={args.flashColor}
      background={args.background}
      height="67px"
      width="467px"
      onClick={action('click')}
    />
  )
}

export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  title: 'Title',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
  orientation: 'left',
  flashColor: 'darkblue',
  background: 'lightyellow',
}
export const HII = DefaultStoryTemplate.bind({})
HII.args = {
  title: 'Name',
  subtitle: 'Name of lead partner',
  orientation: 'left',
  flashColor: '#80CC72',
  background: '#DCE5E7',
}
export const Simple = DefaultStoryTemplate.bind({})
Simple.args = {
  title: 'Name',
  subtitle: undefined,
  orientation: undefined,
  flashColor: undefined,
  background: undefined,
}

export const ListCardMultiple: Story = () => {
  const colors = ['#00ffff', '#822c68', '#f6d6ff', '#0000ca', '#0a002d']
  const arr = Array(20)
    .fill(null)
    .map((_, i) => i)

  return (
    <ListWrapper>
      {arr.map((i) => (
        <ListCard
          title={`Card ${i}`}
          subtitle="Name of lead partner"
          orientation="left"
          flashColor={colors[i % colors.length]}
          background="#DCE5E7"
          height="5em"
          width="100%"
          onClick={action('click')}
        />
      ))}
    </ListWrapper>
  )
}

const ListWrapper = styled.div`
  display: grid;
  gap: 5px;
  font-size: 1.5em;
  width: 467px;
  height: 500px;
  overflow: scroll;
`
