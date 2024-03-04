import React from 'react'
import styled from 'styled-components'

import { ClockIcon, PadlockIcon } from '../index.js'

export interface TableProps {
  styles?: {
    tr: React.CSSProperties
    th: React.CSSProperties
  }
  rows: RowValue[][]
  headers: string[]
  isPage?: boolean
}

type RowValue = React.ReactNode | number | string | null | undefined

export const NameCell = ({ name, date }: { name: string; date: string }) => (
  <Col>
    <Row>
      <PadlockIcon />
      <Title>{name}</Title>
    </Row>
    <Row>
      <ClockIcon />
      <Date>{date}</Date>
    </Row>
  </Col>
)

export const StatusCell = ({
  color = '#27847a',
  Icon,
  status,
}: {
  color?: string
  Icon: React.FC
  status: string
}) => (
  <Col>
    <Icon />
    <Status color={color}>{status}</Status>
  </Col>
)

const Table: React.FC<React.PropsWithChildren<TableProps>> = (props) => {
  return (
    <Background>
      <Wrapper {...props}>
        <TR
          color={'not-page'}
          key={Math.random().toString()}
          style={props.styles?.tr}
        >
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
}

const Title = styled('div')`
  color: #6aa685;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 0px; /* 0% */
`

const Status = styled('div')`
  width: 90px;
  background-color: ${(props) => props.color || '#27847a'};
  color: #fff;
  border-radius: 60px;

  text-align: center;
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px; /* 83.333% */
`

const Date = styled('div')`
  color: #27847a;

  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 10px; /* 83.333% */
`

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
`

const Col = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const TH = styled('th')`
  border-bottom: solid 1px #fff;
  text-align: left;
  padding: 2px 5px;
  border-left: solid 1px #fff;
  background-color: #27847a;
  color: #fff;

  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 26x; /* 171.429% */
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

  &:before {
    content: '';
    position: absolute;
    ${(props) =>
      props.color !== 'not-page' &&
      `
    border-bottom: 10px solid #eee;
    border-left: 10px solid #27847a`};

    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  }
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
