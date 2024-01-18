import React from 'react'

import { Ul, Container, Heading } from './common.js'
import Item, { ItemProps } from './Item.js'

export interface TimelineProps {
  styles?: React.CSSProperties
  type?: 'submit'
  direction?: 'vertical' | 'horizontal'
  variant?: 'hyproof'
  name?: string
  onClick?: (e: any) => void
}

interface Timeline extends React.FC<React.PropsWithChildren<TimelineProps>> {
  Item: React.FC<React.PropsWithChildren<ItemProps>>
}

const Timeline: Timeline = Object.assign(
  (props: React.PropsWithChildren<TimelineProps>) => {
    const { children, ...rest } = props
    return (
      <Container {...props}>
        <Heading>{props.name}</Heading>
        <Ul>{props.children}</Ul>
      </Container>
    )
  },
  { Item },
)

export default Timeline
