import React from 'react'
import { Story } from '@storybook/react'
import styled from 'styled-components'

import Grid from './index'

export default {
  title: 'Grid Component',
  component: Grid,
}

export const Simple: Story = () => {
  return (
    <Grid
      areas={[
        ['sidebar', 'header', 'header'],
        ['sidebar', 'main', 'main'],
        ['footer', 'footer', 'footer'],
      ]}
      columns={['minmax(10%, 20%)', '1fr', '1fr']}
      rows={['minmax(5%, 10%)', '1fr', 'minmax(5%, 10%)']}
    >
      <Grid.Panel area="header">
        <Header />
      </Grid.Panel>
      <Grid.Panel area="sidebar">
        <SideBar />
      </Grid.Panel>
      <Grid.Panel area="main">
        <Main />
      </Grid.Panel>
      <Grid.Panel area="footer">
        <Footer />
      </Grid.Panel>
    </Grid>
  )
}

export const WithGap: Story = () => {
  return (
    <Grid
      areas={[
        ['sidebar', 'header', 'header'],
        ['sidebar', 'main', 'main'],
        ['footer', 'footer', 'footer'],
      ]}
      columns={['minmax(10%, 20%)', '1fr', '1fr']}
      rows={['minmax(5%, 10%)', '1fr', 'minmax(5%, 10%)']}
      gap="20px"
    >
      <Grid.Panel area="header">
        <Header />
      </Grid.Panel>
      <Grid.Panel area="sidebar">
        <SideBar />
      </Grid.Panel>
      <Grid.Panel area="main">
        <Main />
      </Grid.Panel>
      <Grid.Panel area="footer">
        <Footer />
      </Grid.Panel>
    </Grid>
  )
}

export const WithResponsiveLayout: Story = () => {
  return (
    <Grid
      byWidth={[
        {
          minWidth: 500,
          areas: [
            ['sidebar', 'header', 'header'],
            ['sidebar', 'main', 'main'],
            ['footer', 'footer', 'footer'],
          ],
          columns: ['minmax(10%, 20%)', '1fr', '1fr'],
          rows: ['minmax(5%, 10%)', '1fr', 'minmax(5%, 10%)'],
          gap: '20px',
        },
      ]}
      areas={[['header'], ['sidebar'], ['main'], ['footer']]}
      columns={['auto']}
      rows={['minmax(50px, auto)']}
      gap="5px"
    >
      <Grid.Panel area="header">
        <Header />
      </Grid.Panel>
      <Grid.Panel area="sidebar">
        <SideBar />
      </Grid.Panel>
      <Grid.Panel area="main">
        <Main />
      </Grid.Panel>
      <Grid.Panel area="footer">
        <Footer />
      </Grid.Panel>
    </Grid>
  )
}

const SideBar = styled('div')`
  background: blue;
  min-width: 50px;
  min-height: 50px;
  height: 100%;
`
const Header = styled('div')`
  background: red;
  min-height: 50px;
`
const Footer = styled('div')`
  background: green;
  min-height: 50px;
`
const Main = styled('div')`
  background: cyan;
  min-width: 80%;
  min-height: 600px;
`
