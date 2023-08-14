import React from 'react'
import renderer, { act } from 'react-test-renderer'
import 'jest-styled-components'

import Search, { SubmitValue } from './index.js'

describe('Test', () => {
  jest.useFakeTimers()

  test('default', () => {
    const submitEvents: SubmitValue[] = []
    const instance = renderer.create(
      <Search onSubmit={(v) => submitEvents.push(v)} />,
    )

    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('with props', () => {
    const submitEvents: SubmitValue[] = []
    const instance = renderer.create(
      <Search
        placeholder="placeholder"
        color="green"
        background="red"
        onSubmit={(v) => submitEvents.push(v)}
      />,
    )

    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('auto-submit (immediate)', async () => {
    const submitEvents: SubmitValue[] = []
    const instance = renderer.create(
      <Search
        placeholder="placeholder"
        color="green"
        background="red"
        onSubmit={(v) => submitEvents.push(v)}
      />,
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
    const submitEvents: SubmitValue[] = []
    const instance = renderer.create(
      <Search
        placeholder="placeholder"
        color="green"
        background="red"
        onSubmit={(v) => submitEvents.push(v)}
      />,
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
    expect(submitEvents).toEqual([
      [
        {
          isQuoted: false,
          modifier: null,
          type: 'term',
          value: 'test',
        },
      ],
    ])
  })

  test('manual-submit (immediate)', async () => {
    const submitEvents: SubmitValue[] = []
    const instance = renderer.create(
      <Search
        placeholder="placeholder"
        color="green"
        background="red"
        onSubmit={(v) => submitEvents.push(v)}
      />,
    )

    const eventMock = {
      preventDefault: jest.fn(() => {}),
    }
    await act(() => {
      instance.root
        .findByType('input')
        .props.onChange({ target: { value: 'test' } })
    })
    await act(() => {
      instance.root.findByType('form').props.onSubmit(eventMock)
    })

    const tree = instance.toJSON()
    expect(submitEvents).toEqual([
      [
        {
          isQuoted: false,
          modifier: null,
          type: 'term',
          value: 'test',
        },
      ],
    ])
    expect(eventMock.preventDefault.mock.calls).toHaveLength(1)
  })

  test('manual-submit (wait 500ms)', async () => {
    const submitEvents: SubmitValue[] = []
    const instance = renderer.create(
      <Search
        placeholder="placeholder"
        color="green"
        background="red"
        onSubmit={(v) => submitEvents.push(v)}
      />,
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
    expect(submitEvents).toEqual([
      [
        {
          isQuoted: false,
          modifier: null,
          type: 'term',
          value: 'test',
        },
      ],
    ])
  })

  test('reset to null', async () => {
    const submitEvents: SubmitValue[] = []
    const instance = renderer.create(
      <Search
        placeholder="placeholder"
        color="green"
        background="red"
        onSubmit={(v) => submitEvents.push(v)}
      />,
    )

    await act(() => {
      instance.root
        .findByType('input')
        .props.onChange({ target: { value: 'test' } })
    })
    await act(() => {
      jest.advanceTimersByTime(500)
    })
    await act(() => {
      instance.root
        .findByType('input')
        .props.onChange({ target: { value: '' } })
    })
    await act(() => {
      jest.advanceTimersByTime(500)
    })

    const tree = instance.toJSON()
    expect(submitEvents).toEqual([
      [
        {
          isQuoted: false,
          modifier: null,
          type: 'term',
          value: 'test',
        },
      ],
      [],
    ])
  })
})
