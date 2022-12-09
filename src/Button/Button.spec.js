import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Button from './index.js'

import styled from 'styled-components'

describe('Button', () => {
  test('default', () => {
    const tree = renderer.create(<Button>Test</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('outlined', () => {
    const tree = renderer
      .create(<Button variant="outlined">Test</Button>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('text', () => {
    const tree = renderer.create(<Button variant="text">Test</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('disabled', () => {
    const tree = renderer.create(<Button disabled>Test</Button>).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
