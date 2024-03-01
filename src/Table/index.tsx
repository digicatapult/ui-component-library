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
const defaultStyle = `
  color: var(--Black, #000);
  font-family: Roboto Mono;
  font-size: 16px;
  font-style: normal;
  text-align: left;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`

const hyproof = `
  border-bottom: solid 1px #FFF;
  text-align: left;
  padding: 2px 5px;
  border-left: solid 1px #FFF;
  background-color: #27847A;
  color: #FFF;

font-family: Roboto;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: 26x; /* 171.429% */
`

const Table: React.FC<React.PropsWithChildren<TableProps>> = (props) => (
  <Background>
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
  </Background>
)

const TH = styled('th')`
  ${hyproof}
`
const TD = styled('td')`
  color: #1a1a1a;

  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 0px; /* 0% */
  padding: 5px;
  height: 60px;
  text-align: center;
`
const TR = styled('tr')`
  background-color: #fff;
  outline: thin solid #27847a;
`

const Wrapper = styled('table')<TableProps>`
  width: ${({ width }) => width || '100%'};
  border-collapse: separate;
  border-spacing: 0 10px;
`

const Background = styled('div')`
  background-color: #27847a;
  padding: 20px;
  height: 1200px;
`

export default Table
