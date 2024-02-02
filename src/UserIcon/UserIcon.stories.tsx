import React from 'react'
import { Story, StoryObj } from '@storybook/react'

import UserIcon from './index.js'
import { styled } from 'styled-components'

export default {
  title: 'Components/UserIcon',
  component: UserIcon,
  argTypes: {
    name: {
      control: 'text',
    },
    size: {
      control: 'text',
    },
    color: {
      control: 'color',
    },
    bgColor: {
      control: 'color',
    },
    outlineColor: {
      control: 'color',
    },
  },
}

export const Default: StoryObj = {
  args: {},
}
export const HII: StoryObj = {
  render: (args) => (
    <Wrapper>
      <UserIcon {...args} />
    </Wrapper>
  ),
  args: {
    name: 'bruce wayne',
    size: '70px',
    color: '#1a1a1a',
    bgColor: '#9edcfa',
    outlineColor: 'white',
  },
}

const Wrapper = styled.div`
  background: #1a1a1a;
  padding: 16px;
`
