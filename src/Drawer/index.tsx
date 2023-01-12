import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'

import Grid from '../Grid/index.js'

export interface DrawerProps {
  defaultIsOpen?: boolean
  title?: string
  width?: string
  color?: string
  background?: string
}

const Drawer: React.FC<PropsWithChildren<DrawerProps>> = ({
  defaultIsOpen = false,
  title = '',
  width = '100%',
  color = 'black',
  background = 'transparent',
  children,
}) => {
  const [isOpen, setIsOpen] = useState(defaultIsOpen)
  const contentRef: React.RefObject<HTMLDivElement> | null = useRef(null)

  const clickHandler = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  const contentHeight = contentRef.current?.clientHeight || 1000

  return (
    <DrawerWrapper width={width}>
      <DrawerHeader
        title={title}
        color={color}
        background={background}
        isOpen={isOpen}
        onClick={clickHandler}
      ></DrawerHeader>
      <DrawerContentOverflow isOpen={isOpen} maxHeight={contentHeight}>
        <DrawerContentWrapper ref={contentRef}>{children}</DrawerContentWrapper>
      </DrawerContentOverflow>
    </DrawerWrapper>
  )
}

interface DrawerIconProps {
  color: string
}

interface DrawerTitleProps {
  color: string
}

interface DrawerIndicatorProps {
  color: string
  isOpen: boolean
}

interface DrawerContainerProps {
  width: string
}

interface DrawerHeaderProps extends React.DOMAttributes<HTMLButtonElement> {
  title: string
  isOpen: boolean
  background: string
  color: string
}

interface DrawerContentProps {
  isOpen: boolean
  maxHeight: number
}

const DrawerHeader: React.FC<DrawerHeaderProps> = (props) => {
  return (
    <DrawerHeaderWrapper {...props}>
      <Grid
        areas={[['icon', 'title', 'indicator']]}
        rows={['auto']}
        columns={['auto', '1fr', 'auto']}
        gap="1em"
        alignItems="center"
      >
        <Grid.Panel area="icon">
          <DrawerHeaderIcon color={props.color} />
        </Grid.Panel>
        <Grid.Panel area="title" justifySelf={'left'}>
          <DrawerTitle color={props.color}>{props.title}</DrawerTitle>
        </Grid.Panel>
        <Grid.Panel area="indicator">
          <DrawerIndicatorIcon color={props.color} isOpen={props.isOpen}>
            ▼
          </DrawerIndicatorIcon>
        </Grid.Panel>
      </Grid>
    </DrawerHeaderWrapper>
  )
}

const DrawerWrapper = styled.div<DrawerContainerProps>`
  width: ${({ width }) => width};
`

const DrawerHeaderIcon = styled.div<DrawerIconProps>`
  background: ${({ color }) => color};
  height: calc(1em / 16);
  width: 1em;
  margin: 0 calc(1em * 0.35 / 2);

  ::before {
    content: '';
    display: block;
    background: ${({ color }) => color};
    height: calc(1em / 16);
    width: 1em;
    transform: translateY(calc(-4 * 1em / 16)) scaleX(1.35);
  }

  ::after {
    content: '';
    display: block;
    background: ${({ color }) => color};
    height: calc(1em / 16);
    width: 1em;
    transform: translateY(calc(3 * 1em / 16)) scaleX(0.51);
  }
`

const DrawerTitle = styled.div<DrawerTitleProps>`
  color: ${({ color }) => color};
`

const DrawerIndicatorIcon = styled('div')<DrawerIndicatorProps>`
  margin: 0 0.5em;
  font-size: 0.5em;
  color: ${({ color }) => color};
  transition: transform 0.5s ease;
  transform: scaleX(2) ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : '')};
`

const DrawerHeaderWrapper = styled('button')<DrawerHeaderProps>`
  width: 100%;
  font: inherit;
  background: ${({ background }) => background};
  padding: 8px 16px;
  border: 0;

  :hover {
    cursor: pointer;
  }
`

// Overflow wrapper to ensure that when we hide the content the translated element
// doesn't overflow and instead hides the content
const DrawerContentOverflow = styled.div<DrawerContentProps>`
  overflow-y: hidden;
  width: 100%;
  transition: max-height 0.5s ease;
  ${({ isOpen, maxHeight }) =>
    isOpen
      ? `
    max-height: ${maxHeight}px;
    animation: 1s fadeIn;
    animation-fill-mode: forwards;
  `
      : `
    max-height: 0px;
  `}

  @keyframes fadeIn {
    99% {
      overflow: hidden;
    }
    100% {
      overflow: visible;
    }
  }
`

const DrawerContentWrapper = styled.div`
  position: relative;
  width: 100%;
`

export default Drawer
