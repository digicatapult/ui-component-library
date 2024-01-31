import React, { useRef } from 'react'
import styled from 'styled-components'
import { useId } from 'react-id-generator'

import type Avatar from '../UserIcon/index.js'

export interface ListCardProps {
  title: string
  subtitle?: string
  orientation?: 'left' | 'right'
  flashColor?: string
  width?: string
  background?: string

  Icon?: React.FC | typeof Avatar
  height?: string
  onClick: (title: string) => void
}

interface WrapperProps extends React.DOMAttributes<HTMLButtonElement> {
  icon: boolean
  background?: string
  orientation: 'left' | 'right'
  flashColor: string
  width: string
  height: string
}

const ListCard = React.forwardRef<HTMLButtonElement, ListCardProps>(
  (
    {
      flashColor = '#e0e0e0',
      background = 'none',
      title,
      subtitle = '',
      orientation = 'left',
      width = '100%',
      Icon = undefined,
      height = '100%',
      onClick,
    },
    listCardRef,
  ) => {
    const [id] = useId()

    if (Icon)
      return (
        <Row>
          {Icon && <Icon />}
          <Wrapper
            icon={true}
            ref={listCardRef}
            orientation={orientation}
            background={background}
            flashColor={flashColor}
            width={width}
            height={'60px'}
            id={id}
            onClick={() => onClick(title)}
          >
            <label htmlFor={id}>{title}</label>
            {subtitle && <span>{subtitle}</span>}
          </Wrapper>
        </Row>
      )
    return (
      <Wrapper
        icon={Icon ? true : false}
        ref={listCardRef}
        orientation={orientation}
        background={background}
        flashColor={flashColor}
        width={width}
        height={height}
        id={id}
        onClick={() => onClick(title)}
      >
        <label htmlFor={id}>{title}</label>
        {subtitle && <span>{subtitle}</span>}
      </Wrapper>
    )
  },
)

const Row = styled('div')`
  display: flex;
  flex-direction: row;
  background: #d9d9d9;
  border-radius: 60px;
  margin: 2px;
  padding: 8px;
`

const Wrapper = styled.button<WrapperProps>`
  background: ${({ background }) => background};
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

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${({ orientation }) => (orientation === 'right' ? 'unset' : '0')};
    right: ${({ orientation }) => (orientation === 'left' ? 'unset' : '0')};
    width: ${(props: any) => (props.icon ? '0em' : '1em')};
    background: ${({ flashColor }) => flashColor};
  }

  &:focus-visible {
    outline: 1px ${({ flashColor }) => flashColor} solid;
  }
`

export default ListCard
