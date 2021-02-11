import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Button from '.'

describe('Button', () => {
  test('default', () => {
    const tree = renderer.create(<Button>Test</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
