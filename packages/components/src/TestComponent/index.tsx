import React from 'react'

export interface TestProps {
  text: string
}

// TODO remove this, just to prove that ts extension works.
const TestComponent: React.FC<TestProps> = (props) => {
  return <div>{props.text}</div>
}

export default TestComponent
