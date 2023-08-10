import React from 'react'
import styled from 'styled-components'

export interface ToggleButtonProps {
  width?: string
  height?: string
  borderRadius?: string
  isOpen?: boolean
  openBackground?: string
  closeBackground?: string
  openContent?: string
  closeContent?: string
  fontColor?: string
  fontWeight?: string
  onClick?: () => void
}

const ToggleButton: React.FC<ToggleButtonProps> = ({
  width = 'auto',
  height = 'auto',
  borderRadius = '',
  isOpen = false,
  openBackground = 'lightgray',
  closeBackground = '#FFF',
  openContent = 'X',
  closeContent = '?',
  fontColor = 'black',
  fontWeight = 'inherit',
  onClick,
}) => {
  return (
    <Wrapper
      width={width}
      height={height}
      borderRadius={borderRadius}
      isOpen={isOpen}
      openBackground={openBackground}
      closeBackground={closeBackground}
      openContent={openContent}
      closeContent={closeContent}
      fontColor={fontColor}
      fontWeight={fontWeight}
      onClick={onClick}
    >
      {isOpen ? openContent : closeContent}
    </Wrapper>
  )
}

const Wrapper = styled.button<ToggleButtonProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: 0;
  cursor: pointer;
  color: ${({ fontColor }) => fontColor};
  font-weight: ${({ fontWeight }) => fontWeight};

  background: ${({ isOpen, openBackground, closeBackground }) =>
    isOpen ? openBackground : closeBackground};
  border-radius: ${({ borderRadius }) => borderRadius};
`

export default ToggleButton
