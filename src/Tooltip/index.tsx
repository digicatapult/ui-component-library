import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

export interface TooltipProps {
  background?: string
  padding?: string
  margin?: string
  width?: string
  height?: string
  borderRadius?: string
  leftOrRight?: string
}

const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({
  children,
  background = '#f0f0f0',
  padding = '1em',
  margin = '0',
  width = 'auto',
  height = 'auto',
  borderRadius = '1em',
  leftOrRight = 'right',
}) => {
  return (
    <Wrapper
      background={background}
      padding={padding}
      margin={margin}
      width={width}
      height={height}
      borderRadius={borderRadius}
      leftOrRight={leftOrRight}
    >
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div<TooltipProps>`
  background: ${({ background }) => background};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  border-radius: ${({ borderRadius }) => borderRadius};
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.1);
  position: relative;
  box-sizing: border-box;

  ::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    bottom: -0.7em;
    border: 0.8em solid ${({ background }) => background};
    rotate: 45deg;
    border-bottom-right-radius: 0.8em;
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.1);
    ${({ leftOrRight }) => leftOrRight}: 2em;
  }
`

export default Tooltip
