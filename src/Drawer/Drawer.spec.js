import React from 'react'
import renderer, { act } from 'react-test-renderer'
import 'jest-styled-components'

import Drawer from './index.tsx'

import styled from 'styled-components'

describe('Drawer', () => {
  test('simple', () => {
    const tree = renderer
      .create(
        <Drawer>
          <DrawerContentMock />
        </Drawer>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('onClick', async () => {
    const instance = renderer.create(
      <Drawer>
        <DrawerContentMock />
      </Drawer>
    )

    await act(() => {
      instance.root.findByType('button').props.onClick()
    })

    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with overrides', () => {
    const tree = renderer
      .create(
        <Drawer title="FILTER" width="300px" background="magenta">
          <DrawerContentMock />
        </Drawer>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

const DrawerContentMock = styled.div`
  min-height: 500px;
  background: cyan;
`
