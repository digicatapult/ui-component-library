import React from 'react'

// TODO remove this, just to prove that ts extension works.
const TestComponent = (props: { text: string }): JSX.Element => {
  return <div>{props.text}</div>
}

export default TestComponent
