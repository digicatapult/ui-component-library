import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import AppBar from './index.tsx'

describe('AppBar', () => {
  test('default', () => {
    const tree = renderer
      .create(
        <AppBar>
          <AppBar.Item active={true}>what we do</AppBar.Item>
          <AppBar.Item>maps</AppBar.Item>
          <AppBar.Item>contact us</AppBar.Item>
        </AppBar>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('default - fixed', () => {
    const tree = renderer
      .create(
        <AppBar shadow={false} width={'50%'} fixed={true}>
          <AppBar.Item>what we do</AppBar.Item>
          <AppBar.Item>maps</AppBar.Item>
          <AppBar.Item active={true}>contact us</AppBar.Item>
        </AppBar>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('default - custom width', () => {
    const tree = renderer
      .create(
        <AppBar shadow={false} width={'50%'}>
          <AppBar.Item>what we do</AppBar.Item>
          <AppBar.Item>maps</AppBar.Item>
          <AppBar.Item active={true}>contact us</AppBar.Item>
        </AppBar>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('default - no shadow', () => {
    const tree = renderer
      .create(
        <AppBar shadow={false}>
          <AppBar.Item>what we do</AppBar.Item>
          <AppBar.Item>maps</AppBar.Item>
          <AppBar.Item active={true}>contact us</AppBar.Item>
        </AppBar>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('hii', () => {
    const tree = renderer
      .create(
        <AppBar
          shadow={false}
          theme={{
            primary: '#27847A',
            accent: '#FFF',
          }}
        >
          <AppBar.Item>what we do</AppBar.Item>
          <AppBar.Item active={true}>maps</AppBar.Item>
          <AppBar.Item>contact us</AppBar.Item>
        </AppBar>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
