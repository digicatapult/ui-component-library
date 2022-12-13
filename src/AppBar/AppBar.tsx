import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

// TODO create css type, react might have it
interface AppBarProps {
  fixed?: boolean
  search?: boolean
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
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: ${({ shadow }) =>
    shadow
      ? '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);'
      : 'none'};
  background-color: ${({ color, theme }) => color || theme.primary};
  color: ${({ theme }) => theme.accent || '#000'};
`

const Search = styled('div')<AppBarProps>`
  position: relative;
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
  min-height: 74px;
  gap: 15px;
  flex-direction: ${({ direction }) => direction || 'row'};
  padding: ${({ padding }) => padding || '10px 25px'};
  padding-left: 54px;
`

const ItemStyle = styled('div')<AppBarProps>`
  font-family: Roboto;
  font-style: normal;
  font-weight: 700;
  padding: 0px 10px;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 15px;
`

const Item: React.FC<PropsWithChildren<AppBarProps>> = ({
  children,
}: PropsWithChildren<AppBarProps>) => {
  return <ItemStyle>{children}</ItemStyle>
}

// TODO add support for logo icon? - not needed for this project
const AppBar: AppBar = ({
  children,
  search = false,
  shadow = false,
  theme = Theme,
  ...props
}) => {
  return (
    <Wrapper {...props} theme={theme} shadow={shadow}>
      <Bar>{children}</Bar>
      {search && <Search {...props} />}
    </Wrapper>
  )
}

AppBar.Item = Item

export default AppBar
