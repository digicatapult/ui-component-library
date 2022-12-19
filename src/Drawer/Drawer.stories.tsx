import React from 'react'
import Drawer from './Drawer'
import { Meta, Story } from '@storybook/react'
import styled from 'styled-components'

export default {
  title: 'Components/Drawer',
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
