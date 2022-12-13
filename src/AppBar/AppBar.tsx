import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

// TODO create css type, react might have it
interface AppBarProps {
  fixed?: boolean
  shadow?: boolean
  width?: string
  padding?: string
  direction?: string
  position?: string
  background?: string
  theme?: object
}

export interface AppBar extends React.FC<PropsWithChildren<AppBarProps>> {
  Item?: React.FC<PropsWithChildren<AppBarProps>>
}

const Theme = {
  primary: '#FFA',
  accent: '#000',
}

// TODO props per dom element as well as all for appbar
const Wrapper = styled('div')<AppBarProps>`
  display: flex;
  width: ${({ width }) => width || '100%'};
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  transition: box-shadow 1s cubic-bezier(0.8, 1, 0.2, 1) 3s;
  box-shadow: ${({ shadow }) =>
    shadow
      ? '0px 3px 5px -2px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);'
      : 'none'};
  background-color: ${({ color, theme }) => color || theme.primary};
  color: ${({ theme }) => theme.accent || '#000'};
`

const ToolBar = styled('ul')<AppBarProps>`
  position: ${({ fixed }) => (fixed ? 'fixed' : 'relative')};
  margin: 0;
  list-style-type: none;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  min-height: 74px;
  gap: 15px;
  flex-direction: ${({ direction }) => direction || 'row'};
  padding: ${({ padding }) => padding || '10px 25px'};
  padding-left: 54px;
`

const ItemStyle = styled('li')<AppBarProps>`
  text-decoration: none;
  margin: 0;
  cursor: pointer;
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  padding: 0px 10px;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 15px;
`

const Item: React.FC<PropsWithChildren> = ({ children }: PropsWithChildren) => {
  return <ItemStyle>{children}</ItemStyle>
}

const AppBar: AppBar = ({
  children,
  shadow = false,
  theme = Theme,
  ...props
}) => {
  return (
    <Wrapper {...props} theme={theme} shadow={shadow}>
      <ToolBar>{children}</ToolBar>
    </Wrapper>
  )
}

AppBar.Item = Item

export default AppBar
