import React from 'react'
import styled from 'styled-components'

export interface InputTextProps {
  styles?: React.CSSProperties
  width?: string
  type: 'hidden' | 'text'
  name: string
}

const InputText: React.FC<InputTextProps> = (props) => <Input {...props} />

const Input = styled('input')<InputTextProps>`
  width: ${({ width }) => width || '200px'};
  height: 35px;
  margin-bottom: 5px;
  text-align: center;
  border-radius: 2px;
  border: 1px solid var(--black, #000);
  background: var(--white, #fff);
`

export default InputText
