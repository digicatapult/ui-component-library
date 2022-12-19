import React from 'react'
import renderer, { act } from 'react-test-renderer'
import mapboxgl from 'mapbox-gl'

import 'jest-styled-components'

import Map from './index.tsx'

jest.mock('mapbox-gl')

const mockMapOn = jest.fn()

mapboxgl.Map.mockImplementation(() => {
  return { on: mockMapOn }
})

describe('Map', () => {
  test('simple', async () => {
    let instance
    await act(() => {
      instance = renderer.create(<Map />)
    })

    expect(mockMapOn).toHaveBeenCalledTimes(1)
    expect(instance.toJSON()).toMatchSnapshot()
  })
})
