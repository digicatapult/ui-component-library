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

const InputWrapper = styled.div`
  width: ${({ type }) => (type === 'date' ? '15%' : '80%')};
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

const StyledInput = styled.input`
  border: 1px solid ${black};
  height: 30px;
  padding: 5px;
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

const MonetaryInput = ({ id, ...rest }) => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <StyledInput id={id} type="number" {...rest} />
    <Currency>GBP</Currency>
  </div>
)

const Input = ({ label, id, monetary, type, error, ...rest }) => (
  <Wrapper>
    <Label htmlFor={id}>{label}</Label>
    <InputWrapper type={type}>
      {monetary ? (
        <MonetaryInput id={id} {...rest} />
      ) : (
        <StyledInput id={id} type={type} {...rest} />
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  </Wrapper>
)

Input.defaultProps = {
  type: 'text',
  monetary: false,
  error: ''
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  monetary: PropTypes.bool
}

export default Input
