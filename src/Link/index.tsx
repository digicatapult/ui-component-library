import React from 'react'
import styled from 'styled-components'

const iconSvgUri =
  'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pgo8IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDIwMDEwOTA0Ly9FTiIKICJodHRwOi8vd3d3LnczLm9yZy9UUi8yMDAxL1JFQy1TVkctMjAwMTA5MDQvRFREL3N2ZzEwLmR0ZCI+CjxzdmcgdmVyc2lvbj0iMS4wIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiB3aWR0aD0iMjAwLjAwMDAwMHB0IiBoZWlnaHQ9IjIwMC4wMDAwMDBwdCIgdmlld0JveD0iMCAwIDIwMC4wMDAwMDAgMjAwLjAwMDAwMCIKIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiPgoKPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsMjAwLjAwMDAwMCkgc2NhbGUoMC4xMDAwMDAsLTAuMTAwMDAwKSIKZmlsbD0iIzAwMDAwMCIgc3Ryb2tlPSJub25lIj4KPHBhdGggZD0iTTExOTIgMTgwNyBjLTMwIC0zMiAtMjkgLTg3IDEgLTExNSAyMiAtMjEgMzMgLTIyIDE4NSAtMjIgODkgMCAxNjIKLTMgMTYyIC04IDAgLTQgLTE5NiAtMjAzIC00MzUgLTQ0MiAtNDExIC00MTEgLTQzNSAtNDM3IC00MzUgLTQ3MSAwIC00NiAzMwotNzkgODEgLTc5IDMyIDAgNjQgMzAgNDY5IDQzNSAyMzkgMjM5IDQzOCA0MzUgNDQyIDQzNSA1IDAgOCAtNzMgOCAtMTYzIDAKLTE1OCAxIC0xNjQgMjMgLTE4NSAzMiAtMzAgODcgLTI5IDExNSAxIDIyIDIzIDIyIDMwIDIyIDMwNiBsMCAyODIgLTI1IDI0Ci0yNCAyNSAtMjg0IDAgYy0yODMgMCAtMjg0IDAgLTMwNSAtMjN6Ii8+CjxwYXRoIGQ9Ik0zMTUgMTU2MSBjLTIyIC0xMCAtNTcgLTM2IC03NyAtNTcgLTcwIC03MyAtNjggLTU1IC02OCAtNjMxIDAgLTU4MgotMiAtNTYwIDc2IC02MzUgNzMgLTcwIDU1IC02OCA2MzEgLTY4IDU4MiAwIDU2MCAtMiA2MzUgNzYgNjcgNzEgNjggNzQgNjgKNDUzIDAgMTg3IC0zIDM0NyAtNiAzNTYgLTEwIDI1IC02MiA0NyAtOTQgNDAgLTU1IC0xMiAtNTUgLTExIC02MCAtMzc2IC01Ci0zMzYgLTUgLTMzOSAtMjggLTM2MSBsLTIzIC0yMyAtNDk0IDAgLTQ5NCAwIC0yMyAyMyAtMjMgMjMgMCA0OTQgMCA0OTQgMjMKMjMgYzIyIDIzIDI1IDIzIDM2NSAyOCAxODggMyAzNDMgNyAzNDQgOCAxIDEgMTAgMTYgMTkgMzMgMTggMzYgMTMgNzAgLTE2IDk5Ci0xOSAxOSAtMzUgMjAgLTM2NyAyMCAtMzE4IDAgLTM1MSAtMiAtMzg4IC0xOXoiLz4KPC9nPgo8L3N2Zz4K'

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
  iconSrc = iconSvgUri,
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
