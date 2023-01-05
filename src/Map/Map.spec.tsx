import React from 'react'
import renderer, { act, ReactTestRenderer } from 'react-test-renderer'
import mapboxgl from 'mapbox-gl'

import 'jest-styled-components'

import Map from './index.js'

jest.mock('mapbox-gl')

const mockMapOn = jest.fn()

const mapboglMap: any = mapboxgl.Map
mapboglMap.mockImplementation(() => {
  return { on: mockMapOn }
})

describe('Map', () => {
  test('simple', async () => {
    let instance: ReactTestRenderer | null = null
    await act(() => {
      instance = renderer.create(<Map token="token" />)
    })

    expect(instance).not.toBeNull()
    if (instance === null) {
      return
    }

    expect(mockMapOn).toHaveBeenCalledTimes(1)
    expect((instance as ReactTestRenderer).toJSON()).toMatchSnapshot()
  })
})
