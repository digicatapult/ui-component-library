import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
} from 'react'
import { useId } from 'react-id-generator'
import styled from 'styled-components'

import { HeadingLevel, HX } from '../Heading'

export interface SectionProps {
  headingLevel: HeadingLevel
  headingSize?: 'string'
  headingGap?: 'string'

  title: string

  background?: string
  padding?: string
  width?: string
  height?: string
}

interface SectionWrapperProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  background: string
  padding: string
  width: string
  height: string
}

interface SectionHeaderProps {
  size: string
  gap: string
}

const Section: React.FC<PropsWithChildren<SectionProps>> = ({
  title,
  children,
  headingLevel,
  headingGap = '0.5em',
  headingSize = '1.2em',
  background = '#f0f0f0',
  padding = '1em',
  width = '100ch',
  height = 'auto',
}) => {
  const [labelId] = useId()

  return (
    <Wrapper
      aria-labelledby={labelId}
      background={background}
      padding={padding}
      width={width}
      height={height}
    >
      <Heading headingLevel={headingLevel} size={headingSize} gap={headingGap}>
        {title}
      </Heading>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.section<SectionWrapperProps>`
  background: ${({ background }) => background};
  padding: ${({ padding }) => padding};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`

const Heading = styled(HX)<SectionHeaderProps>`
  font-size: ${({ size }) => size};
  margin: 0;
  padding: 0;
  margin-bottom: ${({ gap }) => gap};
`

export default Section
