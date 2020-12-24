import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Carousel from '.'

const images = [
  {
    src: '/mock/path/1',
    alt: 'first-mock'
  },
  {
    src: 'mock/path/2',
    alt: 'second-mock'
  }
]

describe('Carousel', () => {
  test('Image Carousel', () => {
    const tree = renderer
      .create(<Carousel width="90vw" height="90vh" images={images} />)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})
