import React from 'react'

import { Heading, Panel } from './common.js'
import Card from '../../ListCard/index.js'
import Avatar from '../../UserIcon/index.js'

export type SidePanelProps = {
  styles?: React.CSSProperties
  orientation?: 'left' | 'right'
  width?: string | number
  heading?: string
  onClick: () => void
}

export interface IItem {
  Item: typeof Item
}

type SidePanelItemProps = {
  title: string
  background: string
  color?: string
  subtitle?: string
}

const Item: React.FC<React.PropsWithChildren<SidePanelItemProps>> = (props) => (
  <Card
    Icon={() => (
      <Avatar
        bgColor={props.background}
        color={props.color}
        fullName={props.title}
        outlineColor="white"
        size="70px"
      />
    )}
    onClick={(e) => console.log(e)}
    title={props.title}
    subtitle={props.subtitle}
  />
)

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
