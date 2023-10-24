import React from 'react'
import styled from 'styled-components'

export interface TableProps {
  styles?: {
    tr: React.CSSProperties
    th: React.CSSProperties
  }
  rows: RowValue[][]
  headers: string[]
}

type RowValue = React.ReactNode | number | string | null | undefined

const Table: React.FC<React.PropsWithChildren<TableProps>> = (props) => (
  <Wrapper {...props}>
    <TR style={props.styles?.tr}>
      {props.headers.map((header: string) => (
        <TH style={props.styles?.th || {}}>{header}</TH>
      ))}
    </TR>
    {props.rows.map((row: RowValue[]) => (
      <TR style={props.styles?.tr}>
        {row.map((value: RowValue) => (
          <TD>{value}</TD>
        ))}
      </TR>
    ))}
  </Wrapper>
)

const TH = styled('th')`
  color: var(--Black, #000);
  font-family: Roboto Mono;
  font-size: 16px;
  font-style: normal;
  text-align: left;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`
const TD = styled('td')``
const TR = styled('tr')``

const Wrapper = styled('table')<TableProps>`
  width: ${({ width }) => width || '100%'};
  border: none;
`

export default Table
