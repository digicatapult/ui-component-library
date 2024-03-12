import React from 'react'

import {
  Heading,
  Button,
  DefaultPanel,
  HiiVariantPanel,
  ItemWrapper,
} from './common.js'
import ListCard, { ListCardProps } from '../../ListCard/index.js'
import { SideArrowCloseIcon } from '../../index.js'
import Avatar from '../../UserIcon/index.js'

export interface SidePanelProps {
  heading?: string
  variant: 'default' | 'hyproof'
  width?: string
  isOpen?: boolean
  active?: boolean
  callback?: (data: { isOpen: boolean }) => void
}

export interface SidePanelItemProps extends SidePanelProps {
  name: string
  title: string
  background?: string
  active?: boolean
  color?: string
  subtitle?: string
  update?: (name: string, persona: Persona, e?: MouseEvent) => void
}

interface IItem {
  Item: typeof Item
}
type Persona = Omit<ListCardProps, 'onClick'>
type ISidePanel = React.FC<
  React.PropsWithChildren<SidePanelProps> & React.HTMLAttributes<HTMLDivElement>
>

const Item: React.FC<React.PropsWithChildren<SidePanelItemProps>> = ({
  update = () => {},
  active = false,
  variant = 'default',
  ...props
}) => (
  <ItemWrapper>
    <ListCard
      variant={variant}
      active={active}
      flashColor={props.background}
      Icon={() => {
        if (variant === 'hyproof')
          return (
            <Avatar
              bgColor={props.background}
              color={props.color}
              fullName={props.name}
              outlineColor="white"
              size="60px"
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

const SidePanel: ISidePanel & IItem = ({
  children,
  className,
  callback,
  heading,
  ...props
}) => {
  const { variant, isOpen, width } = props
  const [show, setShow] = React.useState(isOpen)

  const Panel = variant === 'default' ? DefaultPanel : HiiVariantPanel

  return (
    <Panel
      onAnimationEnd={() => setShow(true)}
      variant={variant}
      isOpen={show}
      width={width}
      className={className}
    >
      <Button
        onClick={() => {
          setShow(!show)
          if (callback) return callback({ isOpen: !show })
        }}
        {...props}
        isOpen={show}
      >
        <SideArrowCloseIcon />
      </Button>
      <Heading>{heading}</Heading>
      {children}
    </Panel>
  )
}

SidePanel.Item = Item

export default SidePanel
