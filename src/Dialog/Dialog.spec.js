import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Dialog from './index'

describe('Dialog', () => {
  test('default', () => {
    const tree = renderer.create(<Dialog text="Hello" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

const MockContent = styled.div`
  margin: 2ch;
  background: cyan;
  width: 300px;
  height: 300px;
`
