import React from 'react'
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import { H1, H2, H3, H4, H5, H6, H6, HX } from './index.js'

describe('Heading', () => {
  test('H1', () => {
    const tree = renderer.create(<H1 id="id1">Hello1</H1>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('H2', () => {
    const tree = renderer.create(<H2 id="id2">Hello2</H2>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('H3', () => {
    const tree = renderer.create(<H3 id="id3">Hello3</H3>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('H4', () => {
    const tree = renderer.create(<H4 id="id4">Hello4</H4>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('H5', () => {
    const tree = renderer.create(<H5 id="id5">Hello5</H5>).toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('H6', () => {
    const tree = renderer.create(<H6 id="id6">Hello6</H6>).toJSON()
    expect(tree).toMatchSnapshot()
  })

  for (let i = 1; i <= 6; i++) {
    test(`HX - h${i}`, () => {
      const tree = renderer
        .create(
          <HX headingLevel={i} id={`idx${i}`}>
            Hello-x{i}
          </HX>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
    test(`Restyled HX - h${i}`, () => {
      const tree = renderer
        .create(
          <RestyledHX headingLevel={i} id={`idx${i}`}>
            Hello-x{i}
          </RestyledHX>
        )
        .toJSON()
      expect(tree).toMatchSnapshot()
    })
  }
})

const RestyledHX = styled(HX)`
  font-size: 2em;
`
