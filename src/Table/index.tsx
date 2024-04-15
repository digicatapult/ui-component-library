import React from 'react'
import styled, { CSSProperties } from 'styled-components'

import { styles } from './styles-map.js'

type Variants = 'default' | 'hyproof'
type RowValue = React.ReactNode | number | string | null | undefined

export interface TableProps {
  styles?: {
    tr: React.CSSProperties
    th: React.CSSProperties
  }
  rows: RowValue[][]
  headers: string[]
  variant?: Variants
  action?: (item: RowValue[]) => void
}

const Table: React.FC<React.PropsWithChildren<TableProps>> = ({
  variant = 'hyproof',
  action = (item) => item,
  ...props
}) => {
  const { td, tr, th, root } = styles[variant] as { [k: string]: CSSProperties }

  return (
    <Background color={variant}>
      <Wrapper {...props} style={root}>
        <TR key={Math.random().toString()} style={tr}>
          {props.headers.map((header: string) => (
            <TH key={Math.random().toString()} style={th}>
              {header}
            </TH>
          ))}
        </TR>
        {props.rows.map((row: RowValue[]) => (
          <TR
            onClick={() => action(row)}
            key={Math.random().toString()}
            style={tr}
            variant={variant}
          >
            {row.map((value: RowValue) => (
              <TD style={td} key={Math.random().toString()}>
                {value}
              </TD>
            ))}
          </TR>
        ))}
      </Wrapper>
    </Background>
  )
}

const TH = styled('th')``

const TD = styled('td')``

const TR = styled('tr')<{ variant?: Variants }>`
  &:before {
    content: '';
    position: absolute;
    ${(props) =>
      props.variant === 'hyproof' &&
      `right: 0;
      border-bottom: 15px solid #eee;
      border-right: 15px solid #27847a`};
  }
  background-color: ${(props) =>
    props.variant === 'hyproof' ? '#ffffff' : 'inherit'};
  &:hover {
    background-color: ${(props) =>
      props.variant === 'hyproof' ? '#d6fae8' : 'inherit'};
  }
`

const Wrapper = styled('table')<TableProps>`
  position: relative;
  box-sizing: border-box;
  border: 5px solid transparent;
  width: ${({ width }) => width || '100%'};
`

const Background = styled('div')`
  background-color: ${(props) =>
    props.color === 'hyproof' ? '#27847a' : 'none'};
`

export default Table
