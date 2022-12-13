import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

export interface PanelProps {
  area: string
  justifySelf?:
    | 'auto'
    | 'normal'
    | 'stretch'
    | 'center'
    | 'start'
    | 'end'
    | 'flex-start'
    | 'flex-end'
    | 'self-start'
    | 'self-end'
    | 'left'
    | 'right'
    | 'baseline'
    | 'first baseline'
    | 'last baseline'
    | 'safe center'
    | 'unsafe center'
    | 'inherit'
    | 'initial'
    | 'revert'
    | 'revert-layer'
    | 'unset'
}

// TODO remove this, just to prove that ts extension works.
const Panel: React.FC<PropsWithChildren<PanelProps>> = ({
  children,
  ...props
}: PropsWithChildren<PanelProps>) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

const Wrapper = styled('div')<PanelProps>`
  grid-area: ${({ area }) => area};
  ${({ justifySelf }) => (justifySelf ? `justify-self: ${justifySelf}` : '')};
`

export default Panel
