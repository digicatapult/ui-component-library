import React, { useRef } from 'react'
import styled from 'styled-components'
import { useId } from 'react-id-generator'

import type Avatar from '../UserIcon/index.js'

export interface ListCardProps {
  title: string
  subtitle?: string
  orientation?: 'left' | 'right'
  active?: boolean
  flashColor?: string
  width?: string
  background?: string
  variant?: 'default' | 'hyproof'
  Icon?: React.FC | typeof Avatar
  height?: string
  onClick: (title: string) => void
}

interface RowProps extends React.DOMAttributes<HTMLButtonElement> {
  active: boolean
  background: string
}

interface WrapperProps extends React.DOMAttributes<HTMLButtonElement> {
  icon?: boolean
  active?: boolean
  background?: string
  orientation: 'left' | 'right'
  variant?: 'default' | 'hyproof'
  flashColor: string
  width: string
  height: string
}

const ListCard = React.forwardRef<HTMLButtonElement, ListCardProps>(
  (
    {
      variant = 'default',
      active = false,
      flashColor = '#e0e0e0',
      background = 'inherit',
      title,
      subtitle = '',
      orientation = 'left',
      width = '100%',
      Icon = null,
      onClick,
    },
    listCardRef,
  ) => {
    const [id] = useId()

    console.log({ variant, active })
    if (variant === 'hyproof')
      return (
        <Row
          className={variant}
          onClick={() => onClick(title)}
          active={active}
          background={flashColor}
          ref={listCardRef}
        >
          {Icon && <Icon />}
          <Wrapper
            variant={variant}
            orientation={orientation}
            background={background}
            flashColor={flashColor}
            width={width}
            height={'60px'}
            id={id}
          >
            <label htmlFor={id}>{title}</label>
            {subtitle && <span>{subtitle}</span>}
          </Wrapper>
        </Row>
      )
    return (
      <Wrapper
        onClick={() => onClick(title)}
        orientation={orientation}
        background={background}
        flashColor={flashColor}
        width={width}
        height={'60px'}
        id={id}
      >
        <label htmlFor={id}>{title}</label>
        {subtitle && <span>{subtitle}</span>}
      </Wrapper>
    )
  },
)

const Row = styled('button')<RowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  box-sizing: content-box;
  width: 90%;
  overflow: hidden;
  background: ${({ background, active }) => {
    if (active) return background
    return '#d9d9d9'
  }};
  border: none;
  border-radius: ${({ className }: any) => {
    switch (className) {
      case 'hyproof':
        return '60px'
      default:
        return '0px'
    }
  }};
  padding: 5px;
`

const Wrapper = styled('button')<WrapperProps>`
  border: 0;
  font: inherit;
  background: inherit;
  text-align: ${({ orientation }) => orientation};
  cursor: pointer;
  position: relative;
  width: ${({ width, variant }) => (variant === 'hyproof' ? '80%' : width)};
  height: ${({ height, variant }) => (variant === 'hyproof' ? '' : height)};
  padding-left: ${({ variant }) =>
    variant === 'hyproof' ? '10px' : 'calc(1em * 41 / (16 * 1.2))'};
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
    display: ${({ variant }: any) => {
      switch (variant) {
        case 'hyproof':
          return 'none'
        default:
          return ''
      }
    }};
    top: 0;
    bottom: 0;
    left: ${({ orientation }) => (orientation === 'right' ? 'unset' : '0')};
    right: ${({ orientation }) => (orientation === 'left' ? 'unset' : '0')};
    width: 1em;
    background: ${({ flashColor }) => flashColor};
  }

  &:focus-visible {
    outline: 1px ${({ flashColor }) => flashColor} solid;
  }
`

export default ListCard
