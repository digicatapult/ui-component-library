import React from 'react'
import styled, { CSSProperties } from 'styled-components'

import { styles } from './styles-map.js'

export interface TableProps {
  styles?: {
    tr: React.CSSProperties
    th: React.CSSProperties
  }
  rows: RowValue[][]
  headers: string[]
  variant?: 'default' | 'hyproof'
}

type RowValue = React.ReactNode | number | string | null | undefined

const Table: React.FC<React.PropsWithChildren<TableProps>> = ({
  variant = 'hyproof',
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
            key={Math.random().toString()}
            style={tr}
            color={variant === 'hyproof' ? 'not-page' : 'none'}
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

const TR = styled('tr')`
  &:before {
    content: '';
    position: absolute;
    ${(props) =>
      props.color === 'not-page' &&
      `right: 0;
      border-bottom: 15px solid #eee;
      border-right: 15px solid #27847a`};
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
