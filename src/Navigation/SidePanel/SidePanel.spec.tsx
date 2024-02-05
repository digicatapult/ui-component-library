import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import SidePanel from './index.js'

describe('SidePanel', () => {
  test('default', () => {
    const instance = renderer.create(
      <SidePanel variant='default' heading={'test heading'}>
        <SidePanel.Item
          update={(name) => window.alert(name)}
          variant='default'
          name="unit"
          background="green"
          title="test no sub"
        />
        <SidePanel.Item
          update={(name) => window.alert(name)}
          name="test"
          variant='default'
          background="red"
          title="test-tittle suite"
          subtitle="this is subtitle"
        />
      </SidePanel>,
    )
    const tree = instance.toJSON()

    expect(tree).toMatchSnapshot()
  })
  test('hyproof', () => {
    const instance = renderer.create(
      <SidePanel variant='hyproof' heading={'test heading'}>
        <SidePanel.Item
          update={(name) => window.alert(name)}
          variant='hyproof'
          name="unit"
          background="green"
          title="test no sub"
        />
        <SidePanel.Item
          update={(name) => window.alert(name)}
          name="test"
          variant='hyproof'
          background="red"
          title="test-tittle suite"
          subtitle="this is subtitle"
        />
      </SidePanel>,
    )
    const tree = instance.toJSON()

    expect(tree).toMatchSnapshot()
  })
})
