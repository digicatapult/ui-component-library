import React from 'react'

import FormGroup, { FormGroupProps } from './index.js'
import InputText from '../Input/index.js'

export default {
  title: 'Components/FormGroup',
  component: FormGroup,
  argTypes: {
    onSubmit: {}
  },
}

const DefaultStoryTemplate = (args: FormGroupProps) => <FormGroup onSubmit={args.onSubmit}>
  <InputText type='text' name='test-a'/>
  <br />
  <button type='submit'>submit</button>
</FormGroup>

export const Default = DefaultStoryTemplate.bind({})

Default.args = {
  onSubmit: (e) => {
    e.preventDefault()
    window.alert(`submitted: ${e.target}`)
  }
}
