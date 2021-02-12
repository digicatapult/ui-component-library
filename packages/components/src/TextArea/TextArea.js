import React from 'react'
import { PropTypes } from 'prop-types'
import styled from 'styled-components'

import colors from '../colors'

const { errorRed, black } = colors

const Wrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  font-family: 'Open Sans', sans-serif;
  min-height: 60px;
`

const AreaWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  width: 20%;
  max-width: 20%;
  text-transform: uppercase;
  overflow-wrap: break-word;
  font-weight: 600;
`

const StyledTextArea = styled.textarea`
  border: 1px solid ${black};
  padding: 10px;
`

const Currency = styled.span`
  margin-left: 5px;
`

const ErrorMessage = styled.p`
  color: ${errorRed};
  display: block;
  height: 18px;
  margin: 2px 0;
  font-size: 12px;
`

const TextArea = ({ label, id, error, ...rest }) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <AreaWrapper>
      <StyledTextArea id={id} rows={15} cols={100} {...rest} />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </AreaWrapper>
  </Wrapper>
)

TextArea.defaultProps = {
  error: ''
}

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string
}

export default TextArea
