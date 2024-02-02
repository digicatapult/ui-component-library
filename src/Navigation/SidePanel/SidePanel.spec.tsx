import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import SidePanel from './index.js'

describe('SidePanel', () => {
  test('default', () => {
    const instance = renderer.create(
      <SidePanel heading={'test heading'}>
        <SidePanel.Item
          update={(name) => window.alert(name)}
          name="unit"
          background="green"
          title="test no sub"
        />
        <SidePanel.Item
          update={(name) => window.alert(name)}
          name="test"
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
