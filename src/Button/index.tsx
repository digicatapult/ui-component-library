import React from 'react'
import styled from 'styled-components'

type buttonVariant = 'rounded' | 'square' | 'roundedShadow' | 'squareShadow'

export type ButtonTextProps = {
  styles?: React.CSSProperties
  type?: 'submit'
  name?: string
  variant?: buttonVariant
  onClick?: (e: any) => void
}

const ButtonBasic: React.FC<React.PropsWithChildren<ButtonTextProps>> = ({
  children,
  variant,
  ...props
}) => {
  let Button: React.FunctionComponent<
    React.ButtonHTMLAttributes<HTMLButtonElement>
  > | null = null

  switch (variant) {
    case 'rounded':
      Button = RoundedButton
      break
    case 'roundedShadow':
      Button = RoundedShadowButton
      break
    case 'square':
      Button = SquareButton
      break
    case 'squareShadow':
      Button = SquareShadowButton
      break
    default:
      Button = RoundedShadowButton
      break
  }

  return <Button {...props}>{children}</Button>
}

const SquareButton = styled.button`
  height: 30px;
  cursor: pointer;
  border: 1px solid #000;
  padding: 0px 15px;
  background: #fff;
`

const SquareShadowButton = styled(SquareButton)`
  box-shadow: 0px 2px 0px 0px #000;
`

const RoundedButton = styled(SquareButton)`
  border-radius: 8px;
`

const RoundedShadowButton = styled(RoundedButton)`
  box-shadow: 0px 2px 0px 0px #000;
`

export default ButtonBasic
