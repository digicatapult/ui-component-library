import TestComponent from '../../packages/components/src/TestComponent'

export default {
  title: 'Test Component',
  component: TestComponent
}

export const DefaultStoryExpanded = () => {
  return <TestComponent text={'Hello'} />
}
