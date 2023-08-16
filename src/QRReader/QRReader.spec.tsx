import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import QRReader from './index.js'

describe('QRReader', () => {
  test('default', () => {
    const tree = renderer.create(<QRReader onResult={() => {}} />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('no viewfinder', () => {
    const tree = renderer
      .create(
        <QRReader onResult={() => {}} viewFinderVariant="viewfinder-none" />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('modified viewfinder color', () => {
    const tree = renderer
      .create(<QRReader onResult={() => {}} viewFinderColor="red" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
