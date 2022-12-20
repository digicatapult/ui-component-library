import React, { useRef, useState, useEffect } from 'react'
import renderer, { act } from 'react-test-renderer'
import styled from 'styled-components'
import 'jest-styled-components'

import Dialog from './index'

describe('Dialog', () => {
  test('default', () => {
    const instance = renderer.create(
      <Dialog>
        <MockContent />
      </Dialog>
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('no close', () => {
    const instance = renderer.create(
      <Dialog includeClose={false}>
        <MockContent />
      </Dialog>
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('style overrides', () => {
    const instance = renderer.create(
      <Dialog
        modalBackdropColor="rgba(0, 255, 0, 0.05)"
        borderRadius="10px"
        padding="1em"
        margin="1em"
        border="1px solid black"
        boxShadow="10px 10px 10px #90909090"
        width="500px"
        height="500px"
      >
        <MockContent />
      </Dialog>
    )
    const tree = instance.toJSON()
    expect(tree).toMatchSnapshot()
  })
})

const MockContent = styled.div`
  margin: 2ch;
  background: cyan;
  width: 300px;
  height: 300px;
`
