import React from 'react'

import { Label, Heading, Panel } from './common.js'
import Card from '../../ListCard/index.js'
import Avatar from '../../UserIcon/index.js'

export type SidePanelProps = {
  styles?: React.CSSProperties
  text?: string
  orientation?: 'left' | 'right'
  width?: string
  color?: string
  heading?: string
  size?: 'small' | 'medium' | 'large' | undefined
}


const Item: React.FC<React.PropsWithChildren<SidePanelProps>> = (props) => (
  <Card 
   {...props}
   Icon={Avatar}
   onClick={(e) => console.log(e)}
   title='title'
   subtitle='subtitle'
  />
)

interface IItem {
  Item: typeof Item
}

const SidePanel: React.FC<React.PropsWithChildren<SidePanelProps>> & IItem = ({ text, ...props }) => {
  return (
     <Panel {...props}>
      <Heading>{props.heading}</Heading>
      <Label>{text}</Label>
    </Panel>
  )
}

SidePanel.Item = Item

export default SidePanel
