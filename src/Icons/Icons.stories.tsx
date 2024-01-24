import React from 'react'
import styled from 'styled-components'

import LeftArrow from './Left-Arrow.js'
import RightArrow from './Right-Arrow.js'
import Refresh from './Refresh.js'
import Padlock from './Padlock.js'
import InProgress from './InProgress.js'
import Checked from './Checked.js'

export default {
  title: 'Components/Icons',
  argTypes: {
    color: {
      control: {
        type: 'select',
      },
      options: ['#a7a7a7', '#fff', '#00ff00', '#33e58c', 'red'],
    },
  },
}

const allIcons = [
  <LeftArrow />,
  <RightArrow />,
  <Refresh />,
  <Padlock />,
  <InProgress />,
  <Checked />,
]

const DefaultStoryTemplate = (args) => {
  return (
    <>
      <h1>all icons</h1>
      <Container>
        {allIcons.map((icon) => {
          return <IconItem>{icon}</IconItem>
        })}
      </Container>
    </>
  )
}

export const Default = DefaultStoryTemplate.bind({})

const Container = styled('div')`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

const IconItem = styled('div')`
  margin: auto;
  border: 1px solid black;
  padding: 5px;
  width: 25px;
  height: 25px'
`
