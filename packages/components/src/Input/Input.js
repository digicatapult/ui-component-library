import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import colors from '../colors'

const { errorRed, grey } = colors

const StyledInput = styled.input`
  border: 1px solid ${grey};
  border-radius: 5px;
  height: 30px;
  padding: 5px;
  min-width: 350px;
`

const Input = props => <StyledInput {...props} />

Input.defaultProps = {
  type: 'text',
  monetary: false,
  error: ''
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string
}

export default Input
