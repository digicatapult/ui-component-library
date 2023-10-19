import React from 'react'

import { action } from '@storybook/addon-actions'
import FormGroup from './index.js'
import InputText from '../Input/index.js'

export default {
  title: 'Components/FormGroup',
  component: FormGroup,
  argTypes: {
    onSubmit: { action: 'clicked' },
  },
}

const DefaultStoryTemplate = () => (
  <FormGroup onSubmit={action('submit')}>
    <InputText type="text" name="test-a" />
    <br />
    <button type="submit">submit</button>
  </FormGroup>
)

export const Default = DefaultStoryTemplate.bind({})
