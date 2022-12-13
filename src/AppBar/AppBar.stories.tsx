import React from 'react'
import { Story } from '@storybook/react'

import AppBar from './index'

export default {
  title: 'AppBar Component',
  component: AppBar,
}

export const Default: Story = () => {
  return (
    <AppBar />
  )
}

export const DefaultWithChildren: Story = () => {
    return (
      <AppBar>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </AppBar>
    )
  }