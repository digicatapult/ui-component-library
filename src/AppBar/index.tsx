import React from 'react'
import { IAppBar, IItem } from './types.js'
import { Li, Link, ToolBar, Wrapper } from './components'

const Item: IItem = ({ children, ...props }) => (
  <Li>
    <Link href="#" {...props}>
      {children}
    </Link>
  </Li>
)

// TODO update to use grid comopnent
// TODO move to separate components in case this could be reused
const AppBar: IAppBar = ({ children, ...props }) => (
  <Wrapper {...props}>
    <ToolBar>
      {React.Children.map(children, (child: any) =>
        React.cloneElement(child, props)
      )}
    </ToolBar>
  </Wrapper>
)

AppBar.Item = Item

export default AppBar
