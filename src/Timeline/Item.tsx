import React, { BaseSyntheticEvent, PropsWithChildren } from 'react'

import { InProgressIcon, CheckedIcon, RevokedTimelineIcon } from '../index.js'
import { variants } from './index.js'
import {
  Li,
  Input,
  Title,
  Label,
  Status,
  BlankText,
  IconWrapper,
} from './common.js'

export interface ItemProps {
  title: string
  checked?: boolean
  revoked?: boolean
  variant?: 'hyproof' | 'default'
  color?: string
  status?: 'pending' | 'completed' | 'calculating' | 'submitted'
}

const Item: React.FC<PropsWithChildren<ItemProps>> = ({
  children,
  checked = false,
  revoked = false,
  ...props
}: PropsWithChildren<ItemProps>) => {
  const styling: any = props.variant ? variants[props.variant] : {}
  return (
    <Li>
      <Input onChange={() => {}} type={'checkbox'} checked={checked} />
      <Label {...styling}>
        <Title {...styling}>
          {props.title}
          <Status {...styling}>
            {props.status}
            <IconWrapper {...styling}>
              {revoked ? (
                <RevokedTimelineIcon />
              ) : checked ? (
                <CheckedIcon {...styling} />
              ) : (
                <InProgressIcon {...styling} />
              )}
            </IconWrapper>
          </Status>
        </Title>
        {children ? (
          children
        ) : (
          <>
            <BlankText />
            <br />
            <BlankText />
          </>
        )}
      </Label>
    </Li>
  )
}

export default Item
