import { Button } from '@digicatapult/components'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: { name: 'label', description: 'button text' },
    style: {
      name: 'style',
      description:
        'Style object will be passed as inline style as default behaviour of react elements. You can also use styled-components instead of this property which will also overwrite the default styles.',
    },
    variant: {
      name: 'variant',
    },
  },
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {}

export const Outlined = Template.bind({})
Outlined.args = { variant: 'outlined' }

export const Text = Template.bind({})
Text.args = { variant: 'text' }

export const Disabled = Template.bind({})
Disabled.args = { disabled: true }
