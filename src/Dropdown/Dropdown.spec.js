import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import Dropdown from './Dropdown.tsx'

const options = [
  {
    value: '1',
    label: 'option 1',
    color: 'rgba(128, 204, 114, 0.6)',
    textColor: 'white',
  },
  {
    value: '2',
    label: 'option 2',
    color: 'rgba(182, 239, 160, 0.6)',
  },
  {
    value: '3',
    label: 'option 3',
    color: 'rgba(223, 230, 103, 0.6)',
  },
  {
    value: '4',
    label: 'option 4',
    color: 'rgba(223, 230, 103, 0.6)',
  },
]

describe('Dropdown', () => {
  test('default', () => {
    const tree = renderer
      .create(
        <Dropdown
          isMulti={false}
          update={(val) => console.log(val)}
          options={options}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('default - selected', () => {
    const tree = renderer
      .create(
        <Dropdown
          selected={{
            value: '4',
            label: 'option 4',
            color: 'rgba(223, 230, 103, 0.6)',
          }}
          isMulti={false}
          update={(val) => console.log(val)}
          options={options}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('default - with placeholder', () => {
    const tree = renderer
      .create(
        <Dropdown
          placeholder={'placeholder test'}
          isMulti={false}
          update={(val) => console.log(val)}
          options={options}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('multi - hii', () => {
    const tree = renderer
      .create(
        <Dropdown
          selected={[
            {
              value: '4',
              label: 'option 4',
              color: 'rgba(223, 230, 103, 0.6)',
              details: 'some details...',
            },
          ]}
          isMulti={true}
          update={(val) => console.log(val)}
          options={options}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
