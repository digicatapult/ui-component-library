import React, { useRef } from 'react'
import styled from 'styled-components'
import { useId } from 'react-id-generator'

export interface ListCardProps {
  title: string
  subtitle?: string
  orientation?: 'left' | 'right'
  flashColor?: string
  background?: string
  width?: string
  height?: string
  onClick: (title: string) => {}
}

interface WrapperProps extends React.DOMAttributes<HTMLButtonElement> {
  orientation: 'left' | 'right'
  flashColor: string
  background: string
  width: string
  height: string
}

const ListCard: React.FC<ListCardProps> = ({
  flashColor = '#e0e0e0',
  background = '#f0f0f0',
  title,
  subtitle = '',
  orientation = 'left',
  width = '100%',
  height = '100%',
  onClick,
}) => {
  const [id] = useId()

  return (
    <Wrapper
      orientation={orientation}
      flashColor={flashColor}
      background={background}
      width={width}
      height={height}
      id={id}
      onClick={() => onClick(title)}
    >
      <label htmlFor={id}>{title}</label>
      {subtitle && <span>{subtitle}</span>}
    </Wrapper>
  )
}

const Wrapper = styled.button<WrapperProps>`
  border: 0;
  font: inherit;
  text-align: ${({ orientation }) => orientation};
  cursor: pointer;

  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  padding-left: calc(1em * 41 / (16 * 1.2));
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5em;

  background: ${({ background }) => background};

  border-top-left-radius: ${({ orientation }) =>
    orientation === 'left' ? '0.75em' : '0'};
  border-top-right-radius: ${({ orientation }) =>
    orientation === 'right' ? '0.75em' : '0'};
  border-bottom-right-radius: ${({ orientation }) =>
    orientation === 'right' ? '0.75em' : '0'};
  border-bottom-left-radius: ${({ orientation }) =>
    orientation === 'left' ? '0.75em' : '0'};

  > * {
    display: block;
    padding: 0;
    margin: 0;
    width: 90%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    cursor: pointer;
  }

  > label {
    font-size: 1.2em;
    font-weight: bolder;
  }

  > span {
    font-size: 1em;
  }

  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${({ orientation }) => (orientation === 'right' ? 'unset' : '0')};
    right: ${({ orientation }) => (orientation === 'left' ? 'unset' : '0')};

    width: ${({ orientation }) =>
      orientation === 'left' || orientation === 'right' ? '1em' : 'unset'};
    background: ${({ flashColor }) => flashColor};
  }

  :focus-visible {
    outline: 1px ${({ flashColor }) => flashColor} solid;
  }
`

export default ListCard
