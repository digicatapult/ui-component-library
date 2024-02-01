import React from 'react'

import { Heading, Button, Panel, ItemWrapper } from './common.js'
import ListCard, { ListCardProps } from '../../ListCard/index.js'
import { SideArrowCloseIcon, SideArrowOpenIcon } from '../../index.js'
import Avatar from '../../UserIcon/index.js'

export interface SidePanelProps {
  heading?: string
  variant?: 'default' | 'hyproof'
  width?: string
  isOpen?: boolean
  update: (name: string, persona: Persona, e?: MouseEvent) => void
}

export interface SidePanelItemProps extends SidePanelProps {
  name: string
  title: string
  background?: string
  color?: string
  subtitle?: string
}

interface IItem {
  Item: typeof Item
}
type Persona = Omit<ListCardProps, 'onClick'>
type ISidePanel = React.FC<React.PropsWithChildren<SidePanelProps & any>>

const Item: React.FC<React.PropsWithChildren<SidePanelItemProps>> = ({
  update = () => {},
  variant = 'default',
  ...props
}) => (
  <ItemWrapper>
    <ListCard
      variant={variant}
      Icon={() => {
        if (variant === 'hyproof')
          return (
            <Avatar
              bgColor={props.background}
              color={props.color}
              fullName={props.name}
              outlineColor="white"
              size="70px"
            />
          )
      }}
      onClick={(name: any) => {
        update(name, props)
      }}
      title={props.title}
      subtitle={props.subtitle}
    />
  </ItemWrapper>
)

const SidePanel: ISidePanel & IItem = ({ children, heading, ...props }) => {
  const [show, setShow] = React.useState(false)

  return (
    <Panel onAnimationEnd={() => setShow(true)} {...props} isOpen={show}>
      <Button onClick={() => setShow(!show)} {...props}>
        {show ? <SideArrowOpenIcon /> : <SideArrowCloseIcon />}
      </Button>
      <Heading>{`${heading} (${props.title})`}</Heading>
      {children}
    </Panel>
  )
}

SidePanel.Item = Item

export default SidePanel
