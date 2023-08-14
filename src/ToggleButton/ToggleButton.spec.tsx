import React, { useState } from 'react'
import renderer, { act } from 'react-test-renderer'
import 'jest-styled-components'

import ToggleButton from './index.js'

describe('Test', () => {
  test('default', () => {
    const clickHandler = jest.fn(() => {})
    const tree = renderer
      .create(<ToggleButton onClick={clickHandler} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('hii', () => {
    const clickHandler = jest.fn(() => {})
    const tree = renderer
      .create(
        <ToggleButton
          height="2.5em"
          width="2.5em"
          closeBackground="#27847A"
          openBackground="#000"
          borderRadius="1.25em"
          fontColor="#FFF"
          fontWeight="bold"
          onClick={clickHandler}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('click', async () => {
    const openContent = 'opened'
    const closeContent = 'closed'

    const Wrapper = () => {
      const [isOpen, setIsOpen] = useState(false)
      const onClick = () => setIsOpen(!isOpen)
      return (
        <ToggleButton
          openContent={openContent}
          closeContent={closeContent}
          isOpen={isOpen}
          onClick={onClick}
        />
      )
    }

    const instance = renderer.create(<Wrapper />)

    await act(() => {
      instance.root.findByType('button').props.onClick({})
    })

    expect(instance.root.findByType('button').children).toEqual([openContent])

    await act(() => {
      instance.root.findByType('button').props.onClick({})
    })

    expect(instance.root.findByType('button').children).toEqual([closeContent])
  })
})
