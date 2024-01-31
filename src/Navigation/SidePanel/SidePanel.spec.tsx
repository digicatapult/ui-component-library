import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import SidePanel from './index.js'

describe('SidePanel', () => {
  test('default', () => {
    const instance = renderer.create(
      <SidePanel onClick={(e) => console.log(e)} heading={'test heading'}>
        <SidePanel.Item
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
