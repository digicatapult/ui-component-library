import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Section from './index.tsx'

describe('Section', () => {
  test('default', () => {
    const tree = renderer
      .create(
        <Section headingLevel={1} title="TITLE">
          Body content goes here
        </Section>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
  test('overrides', () => {
    const tree = renderer
      .create(
        <Section
          headingLevel={1}
          title="TITLE"
          width="20ch"
          height="100%"
          padding="5ch"
          headingGap="1ch"
          background="blue"
        >
          Body content goes here
        </Section>
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
