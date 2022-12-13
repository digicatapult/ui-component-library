import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'
import styled from 'styled-components'

import Grid from '../Grid'

export interface DrawerProps {
  defaultIsOpen?: boolean
  title?: string
  width?: string
  color?: string
  background?: string
}

const Drawer: React.FC<PropsWithChildren<DrawerProps>> = (props) => {
  const [isOpen, setIsOpen] = useState(props.defaultIsOpen || false)
  const contentRef: React.RefObject<HTMLDivElement> | null = useRef(null)

  const clickHandler = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])

  const title = props.title || ''
  const width = props.width || '100%'
  const color = props.color || 'black'
  const background = props.background || 'transparent'
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
        <DrawContentWrapper ref={contentRef}>
          {props.children}
        </DrawContentWrapper>
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

interface DrawIndicatorProps {
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
    <DrawHeaderWrapper {...props}>
      <Grid
        areas={[['icon', 'title', 'indicator']]}
        rows={['auto']}
        columns={['auto', '1fr', 'auto']}
        gap="1em"
        alignItems="center"
      >
        <Grid.Panel area="icon">
          <DrawHeaderIcon color={props.color} />
        </Grid.Panel>
        <Grid.Panel area="title" justifySelf={'left'}>
          <DrawerTitle color={props.color}>{props.title}</DrawerTitle>
        </Grid.Panel>
        <Grid.Panel area="indicator">
          <DrawIndicatorIcon color={props.color} isOpen={props.isOpen}>
            ▼
          </DrawIndicatorIcon>
        </Grid.Panel>
      </Grid>
    </DrawHeaderWrapper>
  )
}

const DrawerWrapper = styled.div<DrawerContainerProps>`
  width: ${({ width }) => width};
`

const DrawHeaderIcon = styled.div<DrawerIconProps>`
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

const DrawIndicatorIcon = styled('div')<DrawIndicatorProps>`
  margin: 0 0.5em;
  font-size: 0.5em;
  color: ${({ color }) => color};
  transition: transform 0.5s ease;
  transform: scaleX(2) ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : '')};
`

const DrawHeaderWrapper = styled('button')<DrawerHeaderProps>`
  width: 100%;
  font: inherit;
  background: ${({ background }) => background};
  padding: 8px 16px;
  border: 0;
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
  `
      : `
    max-height: 0px;
  `}
`

const DrawContentWrapper = styled.div`
  position: relative;
  width: 100%;
`

export default Drawer
