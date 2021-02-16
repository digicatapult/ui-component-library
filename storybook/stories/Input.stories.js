import { Input } from '../../packages/components/src'

export default {
  title: 'Input',
  component: Input,
  argTypes: {}
}

const Template = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = { label: 'label', id: 'default' }

export const Monetary = Template.bind({})
Monetary.args = { label: 'amount', id: 'monetary', monetary: true }

export const ErrorMessage = Template.bind({})
ErrorMessage.args = {
  label: 'Error',
  id: 'error-message',
  error: 'Required filed'
}

export const Molecule = () => (
  <>
    <Input id="name" label="name" />
    <Input id="value" label="value" monetary />
    <Input id="started-at" label="Started at" type="date" />
  </>
)
