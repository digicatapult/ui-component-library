import React from 'react'

import { Heading, Panel } from './common.js'
import ListCard, { ListCardProps } from '../../ListCard/index.js'
import Avatar from '../../UserIcon/index.js'

export interface SidePanelProps {
  styles?: React.CSSProperties
  orientation?: 'left' | 'right'
  width?: string
  heading?: string
  update?: (id: string, persona: Persona, e?: MouseEvent) => void
}

export interface SidePanelItemProps extends SidePanelProps {
  title: string
  background: string
  color?: string
  subtitle?: string
}

interface IItem {
  Item: typeof Item
}
type Persona = Omit<ListCardProps, 'onClick'>
type ISidePanel = React.FC<React.PropsWithChildren<SidePanelProps>>

const Item: React.FC<React.PropsWithChildren<SidePanelItemProps>> = ({
  update,
  ...persona
}) => (
  <ListCard
    Icon={() => (
      <Avatar
        bgColor={persona.background}
        color={persona.color}
        fullName={persona.title}
        outlineColor="white"
        size="70px"
      />
    )}
    onClick={(name: string) => update && update(name, persona)}
    title={persona.title}
    subtitle={persona.subtitle}
  />
)

const SidePanel: ISidePanel & IItem = ({ children, ...props }) => {
  return (
    <Panel {...props}>
      <Heading>{props.heading}</Heading>
      {children}
    </Panel>
  )
}

SidePanel.Item = Item

export default SidePanel
