import React from 'react'
import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'

import Drawer from './index.js'
import Dropdown from '../Dropdown/index.js'

export default {
  title: 'Components/Navigation/Drawer',
  component: Drawer,
} as Meta<React.ComponentProps<typeof Drawer>>

const Template: Story = (args) => {
  return (
    <StoryWrapper>
      <Drawer
        title={args.title}
        width={args.width}
        color={args.color}
        background={args.background}
      >
        Test
        <DrawerContentMock />
        Test2
        <DrawerContentMock />
      </Drawer>
      Some other content
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'DRAWER',
  width: '400px',
  color: 'white',
  background: '#7BB79B',
}

export const NoParams: Story = () => {
  return (
    <StoryWrapper>
      <Drawer>
        Test
        <DrawerContentMock />
        Test2
        <DrawerContentMock />
      </Drawer>
      Some other content
    </StoryWrapper>
  )
}

export const WithOverflow: Story = () => {
  return (
    <StoryWrapper>
      <Drawer>
        <Dropdown
          update={action('select')}
          options={[
            {
              value: '1',
              label: 'option 1',
              color: 'rgba(128, 204, 114, 0.6)',
            },
            {
              value: '2',
              label: 'option 2',
              color: 'rgba(182, 239, 160, 0.6)',
              textColor: '#216968',
            },
            {
              value: '3',
              label: 'option 3',
              color: 'rgba(223, 230, 103, 0.6)',
              textColor: '#216968',
            },
            {
              value: '4',
              label: 'option 4',
              color: 'rgba(223, 230, 103, 0.6)',
              textColor: '#216968',
            },
          ]}
        />
      </Drawer>
      Some other content
    </StoryWrapper>
  )
}

export const Larger: Story = () => {
  return (
    <StoryLarge>
      <Drawer
        title="LARGE DRAWER"
        width="600px"
        color="white"
        background="#7BB79B"
      >
        Test
        <DrawerContentMock />
        Test2
        <DrawerContentMock />
      </Drawer>
      Some other content
    </StoryLarge>
  )
}

const StoryWrapper = styled.div`
  font-family: Roboto;
  font-size: 1em;
  max-width: 500px;
`

const StoryLarge = styled.div`
  font-family: Roboto;
  font-size: 2em;
`

const DrawerContentMock = styled.div`
  min-height: 200px;
  background: magenta;
`
