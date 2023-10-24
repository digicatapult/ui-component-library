import React from 'react'

import { action } from '@storybook/addon-actions'
import FormGroup from './index.js'
import InputText from '../Input/index.js'
import Button from '../Button/index.js'

export default {
  title: 'Components/FormGroup',
  component: FormGroup,
  argTypes: {
    onSubmit: { action: 'clicked' },
  },
}

const DefaultStoryTemplate = () => (
  <FormGroup
    onSubmit={(e: React.FormEvent) => {
      e.preventDefault()
      action('submit')(
        Object.fromEntries(new FormData(e.target as HTMLFormElement)),
      )
    }}
  >
    <InputText type="text" name="test-a" />
    <br />
    <InputText type="text" name="test-b" />
    <br />
    <InputText type="hidden" name="test-c" value="some hidden value" />
    <br />
    <Button type="submit">submit</Button>
  </FormGroup>
)

export const Default = DefaultStoryTemplate.bind({})
