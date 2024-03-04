import styled from 'styled-components'
import React from 'react'

import { PadlockIcon, ClockIcon } from '../../index.js'

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
