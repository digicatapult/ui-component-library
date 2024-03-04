import React from 'react'

import {
  CertificateCO2Icon,
  CertificateIssuedIcon,
  CertificateRevokedIcon,
} from '../index.js'
import Table, { TableProps, NameCell, StatusCell } from './index.js'

export default {
  title: 'Components/Table',
  component: Table,
  argTypes: {
    headers: {},
    rows: {},
  },
}

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
