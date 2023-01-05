import React, { PropsWithChildren } from 'react'

// TODO create css type, react might have it // break it down
export interface Props {
  shadow?: boolean
  active?: boolean
  fixed?: boolean
  color?: string
  width?: string
  direction?: 'row' | 'column'
  theme?: {
    [key: string]: string
  }
}

export interface IAppBar {
  (args: PropsWithChildren<Props> & Props): React.ReactElement
  Item: React.FC<PropsWithChildren<Props>>
}

export interface IItem {
  (args: PropsWithChildren<Props> & Props): React.ReactElement
}
