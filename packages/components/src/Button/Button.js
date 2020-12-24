import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

const colors = {
  primaryBlue: '#1976d2'
}

const StyledButton = styled.button`
  padding: ${({ size }) =>
    (size === 'small' && '8px') ||
    (size === 'medium' && '16px') ||
    (size === 'large' && '24px') ||
    '16px'};
  color: ${({ variant }) =>
    variant === 'primary' ? '#fff' : colors.primaryBlue};
  border-radius: 4px;
  background: ${({ background, variant }) =>
    variant === 'primary' ? background : 'none'};
  border: ${({ variant }) =>
    variant === 'outlined' ? `1px solid ${colors.primaryBlue}` : 'none'};
  box-sizing: border-box;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    outline: none;
    filter: brightness(120%);
  }
  :focus {
    outline: none;
  }
  :disabled {
    cursor: default;
    background-color: #dfdfdf;
    filter: none;
    color: #fff;
    border: none;
  }
`

const Button = ({ variant, children, size, background, ...rest }) => (
  <StyledButton size={size} background={background} variant={variant} {...rest}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  children: 'Button',
  size: 'medium',
  background: colors.primaryBlue,
  variant: 'primary'
}

Button.propTypes = {
  children: PropTypes.string,
  background: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outlined'])
}

export default Button
