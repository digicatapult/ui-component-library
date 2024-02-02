import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import UserIcon from './index.js'

describe('Link', () => {
  test('default', () => {
    const tree = renderer.create(<UserIcon />).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('overrides', () => {
    const tree = renderer
      .create(
        <UserIcon
          fullName={'bruce wayne'}
          size={'70px'}
          color={'#1a1a1a'}
          bgColor={'#9edcfa'}
          outlineColor={'white'}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
