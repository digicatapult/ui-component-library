import React from 'react'

import { Heading, Button, Panel, ItemWrapper } from './common.js'
import ListCard, { ListCardProps } from '../../ListCard/index.js'
import { SideArrowCloseIcon, SideArrowOpenIcon } from '../../index.js'
import Avatar from '../../UserIcon/index.js'

export interface SidePanelProps {
  orientation?: 'left' | 'right'
  width?: string
  heading?: string
  isOpen?: any
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
type ISidePanel = React.FC<React.PropsWithChildren<any>>

const Item: React.FC<React.PropsWithChildren<SidePanelItemProps>> = ({
  update,
  ...persona
}) => (
  <ItemWrapper>
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
  </ItemWrapper>
)

const SidePanel: ISidePanel & IItem = ({ children, ...props }) => {
  const [show, setShow] = React.useState(false)

  return (
    <Panel onAnimationEnd={() => setShow(true)} {...props} isOpen={show}>
      <Button isOpen={show} onClick={() => setShow(!show)} {...props}>
        {show ? <SideArrowOpenIcon /> : <SideArrowCloseIcon />}
      </Button>
      <Heading>{props.heading}</Heading>
      {children}
    </Panel>
  )
}

SidePanel.Item = Item

export default SidePanel
