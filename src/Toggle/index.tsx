import React from 'react'
import styled from 'styled-components'

export interface ToggleProps {
  width?: string
  height?: string
  borderRadius?: string
  padding?: number
  offBackground?: string
  checkedBackground?: string
  buttonColor?: string
  checked?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Toggle: React.FC<ToggleProps> = ({
  width = '100px',
  height = '50px',
  borderRadius = '20px',
  padding = 5,
  offBackground = 'lightgray',
  checkedBackground = 'green',
  buttonColor = 'white',
  checked,
  onChange,
}) => (
  <>
    <HiddenCheckbox
      type="checkbox"
      id="switch"
      checked={checked}
      checkedBackground={checkedBackground}
      padding={padding}
      onChange={(e) => onChange?.(e)}
    />
    <Label
      width={width}
      height={height}
      borderRadius={borderRadius}
      padding={padding}
      offBackground={offBackground}
      checkedBackground={checkedBackground}
      buttonColor={buttonColor}
      htmlFor="switch"
    />
  </>
)

const HiddenCheckbox = styled.input<ToggleProps>`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label {
    background: ${({ checkedBackground }) => checkedBackground};
  }

  &:checked + label:after {
    left: calc(100% - ${({ padding }) => padding}px);
    transform: translateX(-100%);
  }
`

const Label = styled.label<ToggleProps>`
  cursor: pointer;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ offBackground }) => offBackground};
  display: block;
  border-radius: ${({ borderRadius }) => borderRadius};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: ${({ padding }) => padding}px;
    left: ${({ padding }) => padding}px;
    width: 40%;
    height: calc(100% - ${({ padding }) => (padding || 0) * 2}px);
    background: ${({ buttonColor }) => buttonColor};
    border-radius: ${({ borderRadius }) => borderRadius};
    transition: 0.3s;
  }

  &:active:after {
    width: 60%;
  }
`

export default Toggle
