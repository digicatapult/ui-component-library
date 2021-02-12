import { Card } from '../../packages/components/src'

export default {
  title: 'Card',
  component: Card,
  argTypes: {}
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  data: {
    title: 'Title',
    editors: [{ firstName: 'First Name' }],
    start: Date.now(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  handleClick: () => {
    alert('Title')
  }
}

export const Multiple = args => (
  <div style={{ display: 'flex' }}>
    <Card
      data={{
        title: 'Card story',
        editors: [{ firstName: 'Story Writer' }],
        start: Date.now(),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Sem et tortor consequat id porta. Viverra nam libero justo laoreet sit.'
      }}
      handleClick={() => alert('Card story')}
    />
    <Card
      data={{
        title: 'Title',
        editors: [{ firstName: 'First Name' }],
        start: Date.now(),
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }}
      handleClick={() => alert('Title')}
    />
  </div>
)
