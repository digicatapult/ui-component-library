import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import colors from '../colors'

const { white, black, grey } = colors

const StyledButton = styled.button`
  border: ${({ outlined }) => (outlined ? `1px solid ${black}` : 'none')};
  background-color: ${({ outlined, text, disabled }) =>
    (disabled && grey) || (outlined && white) || (text && white) || black};
  color: ${({ outlined, text }) => (outlined || text ? black : white)};
  text-transform: uppercase;
  font-weight: 600;
  min-width: ${({ text }) => (text ? '10px' : '160px')};
  height: 45px;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
`

const Button = ({ children, outlined, text, ...rest }) => (
  <StyledButton outlined={outlined} text={text} {...rest}>
    {children}
  </StyledButton>
)

Button.defaultProps = {
  children: 'button',
  outlined: false,
  text: false
}

Button.propTypes = {
  children: PropTypes.string,
  outlined: PropTypes.bool,
  text: PropTypes.bool
}

export default Button
