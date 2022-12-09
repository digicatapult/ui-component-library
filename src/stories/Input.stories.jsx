import React from 'react'
import styled from 'styled-components'
import { Story } from "@storybook/react";

import { Input, Button } from '../index.js'

export default {
  title: 'Input',
  component: Input,
  argTypes: {},
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {}

export const Molecule = () => (
  <Mol>
    <form onSubmit={() => alert('form submitted')}>
      <label htmlFor="input1">Full name</label>
      <Input id="input1" placeholder="Placeholder" />
      <label htmlFor="input2">
        Email<span style={{ color: 'red' }}>*</span>
      </label>
      <Input required id="input2" />
      <label htmlFor="input3">
        Password<span style={{ color: 'red' }}>*</span>
      </label>
      <Input required id="input3" />
      <label htmlFor="input4">
        Repeat Password<span style={{ color: 'red' }}>*</span>
      </label>
      <Input required id="input4" />
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  </Mol>
)

const Mol = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  input {
    margin-bottom: 20px;
  }
  label {
    margin-bottom: 10px;
  }
  font-family: Inter;
`
