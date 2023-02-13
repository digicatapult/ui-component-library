import React from 'react'
import renderer, { act } from 'react-test-renderer'
import 'jest-styled-components'

import Toggle from './index.js'

describe('Test', () => {
  test('default', () => {
    const changeHandler = jest.fn(() => {})
    const tree = renderer.create(<Toggle onChange={changeHandler} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with props', () => {
    const changeHandler = jest.fn(() => {})
    const tree = renderer
      .create(
        <Toggle
          height="2.5em"
          width="2.5em"
          offBackground="#27847A"
          onBackground="#000"
          borderRadius="1.25em"
          onChange={changeHandler}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('click', async () => {
    const changeHandler = jest.fn((e: React.ChangeEvent) => {
      return e
    })
    const Wrapper = () => {
      return <Toggle onChange={changeHandler} />
    }

    const instance = renderer.create(<Wrapper />)

    await act(() => {
      instance.root.findByType('input').props.onChange('test')
    })

    expect(changeHandler.mock.calls).toHaveLength(1)

    const change = changeHandler.mock.calls[0]
    expect(change).toEqual(['test'])
  })
})
