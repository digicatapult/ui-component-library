import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

// TODO create css type, react might have it
export interface AppBarProps {
  fixed?: boolean
  width?: string
  padding?: string
  direction?: string
  position?: string
  background?: string
}

const Wrapper = styled('div')<AppBarProps>`
  box-sizing: border-box;
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    background-image: linear-gradient(rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.09));
    height: 60px;
    background-color: ;
    background-color: ${(({ background }) => background || 'none')};
    display: flex;
    gap: 5px;
    position: ${(({ position }) => position || 'relative')};
    flex-direction: ${(({ direction }) => direction || 'row')};
    align-items: center;
    justify-content: flex-start;
    padding: ${(({ padding }) => padding || '5px 25px')};
    width: ${(({ width }) => width || '100%')};
`

const AppBar: React.FC<PropsWithChildren<AppBarProps>> = ({
  children,
  ...props
}: PropsWithChildren<AppBarProps>) => {
  return <Wrapper {...props}>{children}</Wrapper>
}


export default AppBar
