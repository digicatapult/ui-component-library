import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

export interface PanelProps {
  area: string
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
`

export default Panel
