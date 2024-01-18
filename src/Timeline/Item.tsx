import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

import Checked from '../Icons/Checked.js'
import InProgress from '../Icons/InProgress.js'
import { Li, Input, Title, Label, TextBlock } from './common.js'

export interface ItemProps {
    title: string
    checked: boolean
    action?: () => void
}

// TODO remove this, just to prove that ts extension works.
const Item: React.FC<PropsWithChildren<ItemProps>> = ({
  children,
  title,
  checked,
}: PropsWithChildren<ItemProps>) => {
  return <Li>
    <Input type={'checkbox'} checked={checked} />
    <Label>
        <Title>
        {title}
        {checked ? <Checked /> : <InProgress />}
        </Title>
        {children ? children : <><TextBlock /><TextBlock /></>}
    </Label>
  </Li> 
}

const Wrapper = styled('div')<ItemProps>`
`

export default Item 
