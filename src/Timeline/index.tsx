import React from 'react'

import { Ul, Container, Heading } from './common.js'
import Item, { ItemProps } from './Item.js'
import { PadlockIcon } from '../index.js'

export const variants = {
  hyproof: {
    background: '#0c3b38',
    color: '#33e58c',
    border: '1px solid #33e58c',
  },
  default: {
    color: '#000',
  },
}

export interface TimelineProps {
  styles?: React.CSSProperties
  type?: 'submit'
  direction?: 'vertical' | 'horizontal'
  variant?: 'hyproof' | 'default'
  name?: string
}

export interface Timeline
  extends React.FC<React.PropsWithChildren<TimelineProps>> {
  Item: React.FC<React.PropsWithChildren<ItemProps>>
}

const Timeline: Timeline = Object.assign(
  (props: React.PropsWithChildren<TimelineProps>) => {
    const styling = props.variant ? variants[props.variant] : {}
    return (
      <Container {...styling}>
        <Heading {...styling}>
          {props.variant === 'hyproof' && <PadlockIcon />}
          {props.name}
        </Heading>
        <Ul>{props.children}</Ul>
      </Container>
    )
  },
  { Item },
)

Timeline.Item = Item

export default Timeline
