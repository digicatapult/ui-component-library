import React from 'react'
import renderer, { act } from 'react-test-renderer'
import 'jest-styled-components'

import ListCard from './index.tsx'

describe('Test', () => {
  test('default', () => {
    const clickHandler = jest.fn(() => {})
    const tree = renderer
      .create(<ListCard title="LIST CARD" onClick={clickHandler} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('hii', () => {
    const clickHandler = jest.fn(() => {})
    const tree = renderer
      .create(
        <ListCard
          title="Name'"
          subtitle="'Name of lead partner'"
          orientation="'left'"
          flashColor="'#80CC72'"
          background="'#DCE5E7'"
          height="67px"
          width="467px"
          onClick={clickHandler}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('click', async () => {
    const clickHandler = jest.fn(() => {})
    const instance = renderer.create(
      <ListCard
        title="Test"
        subtitle="Name of lead partner"
        orientation="left"
        flashColor="#80CC72"
        background="#DCE5E7"
        height="67px"
        width="467px"
        onClick={clickHandler}
      />
    )

    await act(() => {
      instance.root.findByType('button').props.onClick({})
    })

    expect(clickHandler.mock.calls).toHaveLength(1)
    expect(clickHandler.mock.calls[0][0]).toBe('Test')
  })
})
