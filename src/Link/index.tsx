import React from 'react'
import styled from 'styled-components'
const iconSvg = require('./icon.svg') as string

export interface LinkProps {
  text: string
  href: string
  openInNewTab?: boolean
  color?: string
  visitedColor?: string
  iconSrc?: string
  iconHeight?: string
  iconMargin?: string
}

export interface AProps {
  visitedColor: string
}

const A = styled.a<AProps>`
  color: ${({ color }) => color};

  :visited {
    color: ${({ visitedColor }) => visitedColor};
  }
`

export interface IconProps {
  height: string
  margin: string
}

const Icon = styled.img<IconProps>`
  height: ${({ height }) => height};
  margin: ${({ margin }) => margin};
  vertical-align: top;
`

const Link: React.FC<LinkProps> = ({
  text,
  href,
  openInNewTab = true,
  color = 'black',
  visitedColor = 'black',
  iconSrc = iconSvg,
  iconHeight = '1em',
  iconMargin = '0 0.5em',
}) => {
  const target = openInNewTab ? '_blank' : '_self'

  return (
    <span>
      <A href={href} target={target} color={color} visitedColor={visitedColor}>
        {text}
      </A>
      <Icon
        src={iconSrc}
        alt="link icon"
        height={iconHeight}
        margin={iconMargin}
      />
    </span>
  )
}

export default Link
