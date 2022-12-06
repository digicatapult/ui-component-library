import React from 'react'

// TODO remove this, just to prove that ts extension works.
const TestComponent = (props: { text: string }): JSX.Element => {
  return <h1>{props.text}</h1>
}

export { TestComponent }
