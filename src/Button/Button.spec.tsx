import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Button from './index.js'

describe('Input', () => {
  test('submit', () => {
    const instance = renderer.create(<Button type="submit">press me</Button>)
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('default', () => {
    const instance = renderer.create(<Button name="default">default</Button>)
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('rounded', () => {
    const instance = renderer.create(
      <Button name="default" variant="rounded">
        default
      </Button>,
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('square', () => {
    const instance = renderer.create(
      <Button name="default" variant="square">
        default
      </Button>,
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('roundedShadow', () => {
    const instance = renderer.create(
      <Button name="default" variant="roundedShadow">
        default
      </Button>,
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('squareShadow', () => {
    const instance = renderer.create(
      <Button name="default" variant="squareShadow">
        default
      </Button>,
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('roundedPronounced', () => {
    const instance = renderer.create(
      <Button name="default" variant="roundedPronounced">
        default
      </Button>,
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('roundedPronouncedShadow', () => {
    const instance = renderer.create(
      <Button name="default" variant="roundedPronounced">
        default
      </Button>,
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('style overrides', () => {
    const instance = renderer.create(
      <Button name="override-a" styles={{ height: '100px', background: 'red' }}>
        press me
      </Button>,
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
