import React from 'react'
import styled from 'styled-components'

export type SpinnerProps = {
  styles?: React.CSSProperties
  text?: string
  color?: string
  size?: 'small' | 'medium' | 'large' | undefined
}

const sizeToPixel = {
  small: '10px',
  medium: '30px',
  large: '50px',
}

const Spinner: React.FC<SpinnerProps> = ({ text, ...props }) => {
  return (
    <Wrapper>
      <Animation {...props} />
      <Label>{text}</Label>
    </Wrapper>
  )
}

const Animation = styled('div')`
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid ${(props: SpinnerProps) => props.color || '#3498db'};
    width: ${(props: SpinnerProps) => sizeToPixel[props.size || 'small']};
    height: ${(props: SpinnerProps) => sizeToPixel[props.size || 'small']};
    margin: auto;
    padding: auto;
    animation: spin 1.75s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`
const Wrapper = styled('div')`
  align-self: center;
  justify-self: center;
`

const Label = styled('div')`
  text-align: center;
`

export default Spinner
