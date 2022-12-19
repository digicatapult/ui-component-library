import React from 'react'
import Dropdown from './index'
import { Story } from '@storybook/react'

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  argTypes: {
    isMulti: {
      control: {
        type: 'boolean',
      },
    },
  },
  args: {
    options: [
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
    ],
  },
}

export const Default: Story<typeof Dropdown> = (args) => {
  const [selected, setSelected] = React.useState({
    value: '4',
    label: 'option 4',
    color: 'rgba(223, 230, 103, 0.6)',
  })

  return (
    <>
      <h1>SELECTED: {JSON.stringify(selected)}</h1>
      <Dropdown
        selected={selected}
        isMulti={false}
        update={(val: any) => setSelected(val)}
        {...args}
      />
    </>
  )
}

export const Multi: Story<typeof Dropdown> = (args) => {
  const [selected, setSelected] = React.useState([
    {
      value: '4',
      label: 'option 4',
      color: 'rgba(223, 230, 103, 0.6)',
    },
  ])

  return (
    <>
      <h1>SELECTED: {selected.map((el) => <p>{JSON.stringify(el)}</p>)}</h1>
      <Dropdown
        selected={selected}
        isMulti={true}
        update={(val: any) => {
          console.log(val)
          setSelected(val)
        }}
        {...args}
      />
    </>
  )
}
