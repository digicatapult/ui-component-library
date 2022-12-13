import React from 'react'
import { Drawer } from '../index.js'
import { Story } from '@storybook/react'
import styled from 'styled-components'

export default {
  title: 'Drawer',
  component: Drawer,
}

export const Simple: Story = () => {
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

export const WithOverrides: Story = () => {
  return (
    <StoryWrapper>
      <Drawer title="DRAWER" width="400px" color="white" background="#7BB79B">
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
        width="400px"
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
