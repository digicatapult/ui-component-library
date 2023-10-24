import React from 'react'
import styled from 'styled-components'

export interface ButtonTextProps {
  styles?: React.CSSProperties
  type?: 'submit'
  name?: string
  onClick?: (e: any) => void
}

const ButtonBasic: React.FC<React.PropsWithChildren<ButtonTextProps>> = ({
  children,
  ...props
}) => <Button {...props}>{children}</Button>

export const Button = styled('button')`
  height: 30px;
  cursor: pointer;
  border-radius: 8px;
  border: 1px solid #000;
  padding: 0px 15px;
  background: #fff;
  margin-right: 3px;
  box-shadow: 0px 2px 0px 0px #000;
`

export default ButtonBasic
