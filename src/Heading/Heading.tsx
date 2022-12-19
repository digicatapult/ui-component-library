import React, { PropsWithChildren } from 'react'
import styled from 'styled-components'

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

const headingProps = `
  font-size: 1em;
  padding: 0;
  margin: 0;
`

export const H1 = styled.h1`
  ${headingProps}
`
export const H2 = styled.h2`
  ${headingProps}
`
export const H3 = styled.h3`
  ${headingProps}
`
export const H4 = styled.h4`
  ${headingProps}
`
export const H5 = styled.h5`
  ${headingProps}
`
export const H6 = styled.h6`
  ${headingProps}
`

export interface HXProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: HeadingLevel
}

const Headings = [H1, H2, H3, H4, H5, H6]
export const HX: React.FC<HXProps> = ({ children, headingLevel, ...props }) => {
  const Heading = Headings[headingLevel - 1]
  return <Heading {...props}>{children}</Heading>
}
