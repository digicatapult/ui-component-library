import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import colors from '../colors'

const { white, black, grey } = colors

const StyledButton = styled.button`
  border: ${({ variant }) =>
    variant === 'outlined' ? `1px solid ${black}` : 'none'};
  background-color: ${({ variant, disabled }) =>
    (disabled && grey) ||
    (variant === 'outlined' && white) ||
    (variant === 'text' && white) ||
    black};
  color: ${({ variant }) =>
    variant === 'outlined' || variant === 'text' ? black : white};
  text-transform: uppercase;
  font-weight: 600;
  min-width: ${({ variant }) => (variant === 'text' ? '10px' : '160px')};
  height: 45px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`

const Button = ({ children, variant, ...rest }) => (
  <StyledButton variant={variant} {...rest}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  children: 'button',
  variant: 'contained'
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  variant: PropTypes.oneOf(['contained', 'outlined', 'text'])
}

export default Button
