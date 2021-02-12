import { Input } from '../../packages/components/src'

export default {
  title: 'Input',
  component: Input,
  argTypes: {}
}

const Template = args => <Input {...args} />

export const Default = Template.bind({})
Default.args = { label: 'label' }

export const Monetary = Template.bind({})
Monetary.args = { label: 'amount', monetary: true }

export const ErrorMessage = Template.bind({})
ErrorMessage.args = { label: 'Error', error: 'Required filed' }

export const Molecule = () => (
  <>
    <Input label="name" />
    <Input label="value" monetary />
    <Input label="Started at" type="date" />
  </>
)
