import { Button } from '../../packages/components/src'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { name: 'label', description: 'button text' },
    style: {
      name: 'style',
      description:
        'Style object will be passed as inline style as default behaviour of react elements. You can also use styled-components instead of this property which will also overwrite the default styles.'
    },
    outlined: {
      name: 'outlined',
      description: 'has borders only'
    },
    text: {
      name: 'text',
      description: 'has no background and no borders'
    }
  }
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Outlined = Template.bind({})
Outlined.args = { outlined: true }

export const Text = Template.bind({})
Text.args = { text: true }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
