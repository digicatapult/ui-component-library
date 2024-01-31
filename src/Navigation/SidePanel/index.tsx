import React from 'react'

import { Heading, Panel } from './common.js'
import Card from '../../ListCard/index.js'
import Avatar from '../../UserIcon/index.js'

export type SidePanelProps = {
  styles?: React.CSSProperties
  orientation?: 'left' | 'right'
  width?: string | number
  title: string
  subtitle?: string
  heading?: string
}

const Item: React.FC<React.PropsWithChildren<SidePanelProps>> = (props) => (
  <Card
    Icon={() => (
      <Avatar
        bgColor="#9edcfa"
        color="#1a1a1a"
        fullName="Heidi Heidi"
        outlineColor="white"
        size="70px"
      />
    )}
    onClick={(e) => console.log(e)}
    title={props.title}
    subtitle={props.subtitle}
  />
)

interface IItem {
  Item: typeof Item
}

const SidePanel: React.FC<React.PropsWithChildren<SidePanelProps>> & IItem = ({
  children,
  ...props
}) => {
  return (
    <Panel {...props}>
      <Heading>{props.heading}</Heading>
      {children}
    </Panel>
  )
}

SidePanel.Item = Item

export default SidePanel
