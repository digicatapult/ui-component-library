import React from 'react'
import { Story } from '@storybook/react'
import styled from 'styled-components'

import HelpDiv from './index.js'

export default {
  title: 'Components/HelpDiv',
  component: HelpDiv,
  argTypes: {
    background: {
      control: 'color',
    },
    width: {
      control: 'text',
    },
    height: {
      control: 'text',
    },
    padding: {
      control: 'text',
    },
    margin: {
      control: 'text',
    },
    borderRadius: {
      control: 'text',
    },
    leftOrRight: {
      options: ['left', 'right'],
      control: { type: 'radio' },
    },
  },
}

const DefaultStoryTemplate: Story = (args) => {
  return <HelpDiv {...args}></HelpDiv>
}
export const Default = DefaultStoryTemplate.bind({})
Default.args = {
  width: '200px',
  height: '200px',
}

export const Left = DefaultStoryTemplate.bind({})
Left.args = {
  width: '200px',
  height: '200px',
  leftOrRight: 'left',
}

const colours = {
  'Feasibility Study': '#27847A',
  'Funding/Competition': '#80CC72',
  'Testing & certification': '#B6EFA0',
  'Innovation programme': '#DFE667',
  'R&D facility': '#C8B88A',
  'Government strategy': '#F1DDDF',
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.3rem;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ::after {
    content: '';
    height: 24px;
    width: 24px;
    background-color: ${(props) => props.color};
  }
`

const Key = () => (
  <Wrapper>
    {Object.entries(colours).map(([key, value]) => (
      <Row color={value}>{key}</Row>
    ))}
  </Wrapper>
)

export const HII = DefaultStoryTemplate.bind({})
HII.args = {
  width: '28ch',
  background: '#FFF',
  children: <Key />,
}
