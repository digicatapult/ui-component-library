import { TestComponent } from '../../packages/components/src'

export default {
  title: 'Test Component',
  component: TestComponent
}

export const DefaultStoryExpanded = () => {
  return <TestComponent text={'Hello'} />
}
