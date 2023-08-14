import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

import Panel, { PanelProps } from './GridPanel.js'

export interface GridLayout {
  areas: string[][]
  rows: string[]
  columns: string[]
  gap?: string
  alignItems?: 'center' | 'start' | 'end' | 'flex-start' | 'flex-end'
}

export interface GridLayoutByWidth extends GridLayout {
  minWidth: number
}

export interface GridProps extends GridLayout {
  byWidth?: GridLayoutByWidth[]
}

export interface Grid extends React.FC<PropsWithChildren<GridProps>> {
  Panel: React.FC<PropsWithChildren<PanelProps>>
}

const Grid: Grid = Object.assign(
  (propsWithC: PropsWithChildren<GridProps>) => {
    const { children, ...props } = propsWithC
    return <Wrapper {...props}>{children}</Wrapper>
  },
  {
    Panel,
  },
)

Grid.Panel = Panel

const interpolateLayout = ({
  areas,
  rows,
  columns,
  gap,
  alignItems,
}: GridLayout) => {
  return `
    grid-template-areas: ${areas.map((row) => `"${row.join(' ')}"`).join('\n')};
    grid-template-rows: ${rows.join(' ')};
    grid-template-columns: ${columns.join(' ')};
    gap: ${gap || '0px'};
    ${alignItems ? `align-items: ${alignItems};` : ''}

  `
}

const Wrapper = styled('div')<GridProps>`
  display: grid;
  ${interpolateLayout}
  ${({ byWidth }) => {
    const entries = byWidth
      ? byWidth.map(({ minWidth, ...props }) => {
          return `
        @media (min-width: ${minWidth}px) {
          ${interpolateLayout(props)}
        }
      `
        })
      : []

    return entries.join('\n')
  }}
`

export default Grid
