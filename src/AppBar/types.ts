export type AppBarProps = {
  shadow?: boolean
  fixed?: boolean
  color?: string
  width?: string
  direction?: 'row' | 'column'
  theme?: {
    [key: string]: string
  }
}

export type AppBarItemProps = {
  href?: string
  active?: boolean
  theme?: {
    [key: string]: string
  }
}
