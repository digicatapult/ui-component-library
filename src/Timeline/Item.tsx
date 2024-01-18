import React, { PropsWithChildren } from 'react'

import Checked from '../Icons/Checked.js'
import InProgress from '../Icons/InProgress.js'
import { Li, Input, Title, Label, TextBlock } from './common.js'

export interface ItemProps {
  title: string
  checked: boolean
  action?: () => void
}

const Item: React.FC<PropsWithChildren<ItemProps>> = ({
  children,
  title,
  checked,
}: PropsWithChildren<ItemProps>) => {
  return (
    <Li>
      <Input type={'checkbox'} checked={checked} />
      <Label>
        <Title>
          {title}
          {checked ? <Checked /> : <InProgress />}
        </Title>
        {children ? (
          children
        ) : (
          <>
            <TextBlock />
            <TextBlock />
          </>
        )}
      </Label>
    </Li>
  )
}

export default Item
