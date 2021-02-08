import { Button } from '../../packages/components'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    background: {
      control: 'color',
      description:
        'The background shorthand CSS property sets all background style properties at once, such as color, image, origin and size, or repeat method.'
    },
    children: { name: 'label', description: '' },
    onClick: { action: 'clicked', description: 'Click handler' },
    size: { name: 'size', description: 'Size of the button.' },
    style: {
      name: 'style',
      description:
        'Style object will be passed as inline style as default behaviour of react elements. You can also use styled-components instead of this property which will also overwrite the default styles.'
    },
    disabled: {
      name: 'disabled',
      description: 'Default disabled property of html elements.'
    },
    variant: {
      name: 'variant',
      description: 'Changes the UI of the button depending on the priority.'
    }
  }
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  disabled: false
}

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary', disabled: false }

export const Outlined = Template.bind({})
Outlined.args = { variant: 'outlined', disabled: false }
