import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import colors from '../colors'

const { errorRed, grey } = colors

const StyledTextArea = styled.textarea`
  border: 1px solid ${grey};
  padding: 10px;
  border-radius: 5px;
`

const TextArea = (props) => <StyledTextArea {...props} />

export default TextArea
