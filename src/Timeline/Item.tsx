import React, { PropsWithChildren } from 'react'

import Checked from '../Icons/Checked.js'
import InProgress from '../Icons/InProgress.js'
import { Li, Input, Title, Label, Status, BlankText, IconWrapper } from './common.js'
import { variants } from './index.js'

export interface ItemProps {
  title: string
  checked: boolean
  variant?: any
  color?: string
  subStatus?: 'pending' | 'completed' | 'calculating' | ('submitted' & string)
  action?: () => void
}

const renderBlankText = () => <>
  <BlankText />
  <br />
  <BlankText />
</>

const Item: React.FC<PropsWithChildren<ItemProps>> = ({
  children,
  ...props
}: PropsWithChildren<ItemProps>) => {
    const styling: any = props?.variant ? variants[props.variant as 'hyproof'] : {}
  return (
    <Li>
      <Input type={'checkbox'} checked={props.checked} />
      <Label {...styling}>
        <Title {...styling}>
          {props.title}
          <Status {...styling}>
            {props.subStatus}
            <IconWrapper {...props}>
              {props.checked
                ? <Checked color={props.color} />
                : <InProgress color={props.color} />
              }
            </IconWrapper>
          </Status>
        </Title>
        {children ? (
          children
        ) : (
          renderBlankText()
        )}
      </Label>
    </Li>
  )
}

export default Item
