import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Spinner from './index.js'

describe('Spinner', () => {
  test('default', () => {
    const instance = renderer.create(<Spinner />)
    const tree = instance.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('with color and text props', () => {
    const instance = renderer.create(
      <Spinner color="#ff00ff" text="this is a test" />,
    )
    const tree = instance.toJSON()

    expect(tree).toMatchSnapshot()
  })

  test('renders a small spinner', () => {
    const instance = renderer.create(<Spinner size="small" />)

    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders a medium spinner', () => {
    const instance = renderer.create(<Spinner size="medium" />)

    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('renders a large spinner', () => {
    const instance = renderer.create(<Spinner size="large" />)

    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
