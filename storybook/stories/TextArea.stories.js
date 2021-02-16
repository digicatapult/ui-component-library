import { TextArea } from '../../packages/components/src'

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {}
}

const Template = args => <TextArea {...args} />

export const Default = Template.bind({})
Default.args = { label: 'label', id: 'default' }

export const ErrorMessage = Template.bind({})
ErrorMessage.args = {
  label: 'label',
  id: 'error-message',
  error: 'required field'
}
