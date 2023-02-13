import React from 'react'
import styled from 'styled-components'

export interface ToggleProps {
  width?: string
  height?: string
  borderRadius?: string
  padding?: number
  offBackground?: string
  onBackground?: string
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
  onBackground = 'green',
  buttonColor = 'white',
  checked,
  onChange,
}) => (
  <>
    <HiddenCheckbox
      type="checkbox"
      id="switch"
      checked={checked}
      onBackground={onBackground}
      padding={padding}
      onChange={(e) => onChange?.(e)}
    />
    <Label
      width={width}
      height={height}
      borderRadius={borderRadius}
      padding={padding}
      offBackground={offBackground}
      onBackground={onBackground}
      buttonColor={buttonColor}
      htmlFor="switch"
    >
      Toggle
    </Label>
  </>
)

const HiddenCheckbox = styled.input<ToggleProps>`
  height: 0;
  width: 0;
  visibility: hidden;

  :checked + label {
    background: ${({ onBackground }) => onBackground};
  }

  :checked + label:after {
    left: calc(100% - ${({ padding }) => padding}px);
    transform: translateX(-100%);
  }
`

const Label = styled.label<ToggleProps>`
  cursor: pointer;
  text-indent: -9999px;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background: ${({ offBackground }) => offBackground};
  display: block;
  border-radius: ${({ borderRadius }) => borderRadius};
  position: relative;

  :after {
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

  :active:after {
    width: 60%;
  }
`

export default Toggle
