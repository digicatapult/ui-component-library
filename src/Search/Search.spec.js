import React from 'react'
import renderer, { act } from 'react-test-renderer'
import 'jest-styled-components'

import Search from './index.tsx'

describe('Test', () => {
  jest.useFakeTimers()

  test('default', () => {
    const submitEvents = []
    const instance = renderer.create(
      <Search onSubmit={(v) => submitEvents.push(v)} />
    )

    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with props', () => {
    const submitEvents = []
    const instance = renderer.create(
      <Search
        placeholder="placeholder"
        color="green"
        background="red"
        onSubmit={(v) => submitEvents.push(v)}
      />
    )

    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('auto-submit (immediate)', async () => {
    const submitEvents = []
    const instance = renderer.create(
      <Search
        placeholder="placeholder"
        color="green"
        background="red"
        onSubmit={(v) => submitEvents.push(v)}
      />
    )

    await act(() => {
      instance.root
        .findByType('input')
        .props.onChange({ target: { value: 'test' } })
    })

    const tree = instance.toJSON()
    expect(submitEvents).toEqual([])
  })

  test('auto-submit (after 500ms)', async () => {
    const submitEvents = []
    const instance = renderer.create(
      <Search
        placeholder="placeholder"
        color="green"
        background="red"
        onSubmit={(v) => submitEvents.push(v)}
      />
    )

    await act(() => {
      instance.root
        .findByType('input')
        .props.onChange({ target: { value: 'test' } })
    })
    await act(() => {
      jest.advanceTimersByTime(500)
    })

    const tree = instance.toJSON()
    expect(submitEvents).toEqual(['test'])
  })

  test('manual-submit (immediate)', async () => {
    const submitEvents = []
    const instance = renderer.create(
      <Search
        placeholder="placeholder"
        color="green"
        background="red"
        onSubmit={(v) => submitEvents.push(v)}
      />
    )

    await act(() => {
      instance.root
        .findByType('input')
        .props.onChange({ target: { value: 'test' } })
    })
    await act(() => {
      instance.root.findByType('form').props.onSubmit(null)
    })

    const tree = instance.toJSON()
    expect(submitEvents).toEqual(['test'])
  })

  test('manual-submit (wait 500ms)', async () => {
    const submitEvents = []
    const instance = renderer.create(
      <Search
        placeholder="placeholder"
        color="green"
        background="red"
        onSubmit={(v) => submitEvents.push(v)}
      />
    )

    await act(() => {
      instance.root
        .findByType('input')
        .props.onChange({ target: { value: 'test' } })
    })
    await act(() => {
      instance.root.findByType('form').props.onSubmit(null)
    })
    await act(() => {
      jest.advanceTimersByTime(500)
    })

    const tree = instance.toJSON()
    expect(submitEvents).toEqual(['test'])
  })
})
