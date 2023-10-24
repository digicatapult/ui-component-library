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
const defaultStyle = `color: var(--Black, #000);font-family: Roboto Mono;font-size: 16px;font-style: normal;text-align: left;font-weight: 400;line-height: normal;`

const Table: React.FC<React.PropsWithChildren<TableProps>> = (props) => (
  <Wrapper {...props}>
    <TR key={Math.random().toString()} style={props.styles?.tr}>
      {props.headers.map((header: string) => (
        <TH key={Math.random().toString()} style={props.styles?.th || {}}>
          {header}
        </TH>
      ))}
    </TR>
    {props.rows.map((row: RowValue[]) => (
      <TR key={Math.random().toString()} style={props.styles?.tr}>
        {row.map((value: RowValue) => (
          <TD key={Math.random().toString()}>{value}</TD>
        ))}
      </TR>
    ))}
  </Wrapper>
)

const TH = styled('th')`
  ${defaultStyle}
  text-decoration-line: underline;
`
const TD = styled('td')`
  ${defaultStyle}
`
const TR = styled('tr')``

const Wrapper = styled('table')<TableProps>`
  width: ${({ width }) => width || '100%'};
  border-collapse: collapse;
`

export default Table
