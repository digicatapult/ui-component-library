import React from 'react'
import { Story } from '@storybook/react'
import styled from 'styled-components'

import Map from './index'

export default {
  title: 'Map Component',
  component: Map,
}

export const Default: Story = () => {
  return <Map />
}
