import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

// TODO create css type, react might have it
export interface AppBarProps {
  fixed?: boolean
  search: boolean
  shadow: boolean
  width?: string
  padding?: string
  direction?: string
  position?: string
  background?: string
}

// TODO props per dom element as well as all for appbar
const Wrapper = styled('div')<AppBarProps>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: ${({ shadow }) => shadow ? '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);' : 'none'};
  background-image: linear-gradient(
    rgba(255, 255, 255, 0.09),
    rgba(255, 255, 255, 0.09)
  );
`

const Search = styled('div')<AppBarProps>`
  position: relative;
  background-color: red;
  width: 75px;
  hegith: 100%;
`

const Bar = styled('div')<AppBarProps>`
  position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  min-height: 25px;
  gap: 5px;
  background-color: ${({ background }) => background || 'none'};
  flex-direction: ${({ direction }) => direction || 'row'};
  padding: ${({ padding }) => padding || '10px 25px'};
`

// TODO add support for logo icon? - not needed for this project
const AppBar: React.FC<PropsWithChildren<AppBarProps>> = ({
  children,
  search = true,
  shadow = true,
  ...props
}: PropsWithChildren<AppBarProps>) => {
  return <Wrapper {...props} shadow={shadow}>
    <Bar>{children}</Bar>
    {search && <Search {...props} />}
  </Wrapper>
}

export default AppBar
