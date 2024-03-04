import React from 'react'

import styled from 'styled-components'
import {
  CertificateCO2Icon,
  CertificateIssuedIcon,
  CertificateRevokedIcon,
  PadlockIcon,
  ClockIcon,
} from '../index.js'
import Table, { TableProps } from './index.js'

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    headers: {},
    rows: {},
  },
}

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

const DefaultStoryTemplate = (args: TableProps) => <Table {...args} />

export const Hyproof = DefaultStoryTemplate.bind({})

Hyproof.args = {
  headers: [
    'Date',
    'H2 Batch size',
    'Electric energy use',
    'Electric energy use',
    'Status',
  ],
  rows: [
    [
      <NameCell name={'UK-HYPROOF-0001'} date={'2021/01/12, 22:50h'} />,
      '1.0 MWh',
      '4.2 MWh',
      '45g CO2e',
      <StatusCell Icon={CertificateIssuedIcon} status={'issued'} />,
    ],
    [
      <NameCell name={'UK-HYPROOF-0002'} date={'2024/02/22, 22:50h'} />,
      '0.5 MWh',
      '4.2 MWh',
      '45g CO2e',
      <StatusCell Icon={CertificateCO2Icon} status={'C.Embodiment'} />,
    ],
    [
      <NameCell name={'UK-HYPROOF-0003'} date={'2024/02/02, 22:50h'} />,
      '2.0 MWh',
      '4.2 MWh',
      '45g CO2e',
      <StatusCell Icon={CertificateCO2Icon} status={'C.Embodiment'} />,
    ],
    [
      <NameCell name={'UK-HYPROOF-0004'} date={'2021/01/12, 22:50h'} />,
      '1.0 MWh',
      '4.2 MWh',
      '45g CO2e',
      <StatusCell
        Icon={CertificateRevokedIcon}
        color={'red'}
        status={'Revoked'}
      />,
    ],
    [
      <NameCell name={'UK-HYPROOF-0005'} date={'2024/02/22, 22:50h'} />,
      '0.5 MWh',
      '4.2 MWh',
      '45g CO2e',
      <StatusCell Icon={CertificateIssuedIcon} status={'issued'} />,
    ],
    [
      <NameCell name={'UK-HYPROOF-0006'} date={'2024/02/02, 22:50h'} />,
      '2.0 MWh',
      '4.2 MWh',
      '45g CO2e',
      <StatusCell
        Icon={CertificateRevokedIcon}
        color={'red'}
        status={'Revoked'}
      />,
    ],
  ],
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
