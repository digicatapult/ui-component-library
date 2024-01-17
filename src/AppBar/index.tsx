import React from 'react'
import { AppBarProps, AppBarItemProps } from './types.js'
import { Li, Link, ToolBar, Wrapper } from './common.js'

const Item: React.FC<React.PropsWithChildren<AppBarItemProps>> = ({
  children,
  href,
  ...props
}) => (
  <Li>
    <Link href={typeof href === 'string' ? href : '#'} {...props}>
      {children}
    </Link>
  </Li>
)

// TODO update to use grid comopnent
// TODO move to separate components in case this could be reused
const AppBar: React.FC<React.PropsWithChildren<AppBarProps>> & {
  Item: typeof Item
} = ({ children, ...props }) => (
  <Wrapper {...props}>
    <ToolBar>
      {React.Children.map(children, (child: any) => {
        if (child.props) return React.cloneElement(child, props)
      })?.filter(Boolean)}
    </ToolBar>
  </Wrapper>
)

AppBar.Item = Item

export default AppBar
