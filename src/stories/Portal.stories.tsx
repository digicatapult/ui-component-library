import React from 'react'
import {Meta} from '@storybook/react'

import {BaseStyles, Box, ThemeProvider} from '..'
import Portal, {registerPortalRoot} from '../Portal'

export default {
  title: 'Behaviors/Portal',
  component: Portal,
  decorators: [
    Story => {
      return (
        <ThemeProvider>
          <BaseStyles>
            <Story />
          </BaseStyles>
        </ThemeProvider>
      )
    },
  ],
} as Meta

export const defaultPortal = () => (
  <>
    Root position
    <Box bg="red.2" p={3}>
      Outer container
      <Box bg="green.2" p={3}>
        Inner container
        <Portal>
          Portaled content rendered at <code>&lt;BaseStyles&gt;</code> root.
        </Portal>
      </Box>
    </Box>
  </>
)

export const customPortalRootById = () => (
  <>
    Root position
    <Box bg="red.2" p={3} id="__primerPortalRoot__">
      Outer container
      <Box bg="green.2" p={3}>
        Inner container
        <Portal>Portaled content rendered at the outer container.</Portal>
      </Box>
    </Box>
  </>
)

export const CustomPortalRootByRegistration: React.FC<React.PropsWithChildren<Record<string, never>>> = () => {
  const outerContainerRef = React.useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    if (outerContainerRef.current instanceof HTMLElement) {
      registerPortalRoot(outerContainerRef.current)
      setMounted(true)
    }
  }, [])
  return (
    <>
      Root position
      <Box bg="red.2" p={3} ref={outerContainerRef}>
        {mounted ? (
          <>
            Outer container
            <Box bg="green.2" p={3}>
              Inner container
              <Portal>Portaled content rendered at the outer container.</Portal>
            </Box>
          </>
        ) : null}
      </Box>
    </>
  )
}

export const MultiplePortalRoots: React.FC<React.PropsWithChildren<Record<string, never>>> = () => {
  const outerContainerRef = React.useRef<HTMLDivElement>(null)
  const innerContainerRef = React.useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => {
    if (outerContainerRef.current instanceof HTMLElement && innerContainerRef.current instanceof HTMLElement) {
      registerPortalRoot(outerContainerRef.current, 'outer')
      registerPortalRoot(innerContainerRef.current, 'inner')
      setMounted(true)
    }
  }, [outerContainerRef])
  return (
    <>
      Root position
      <Box bg="red.2" p={3} ref={outerContainerRef}>
        Outer container
        <Box bg="green.2" p={3} ref={innerContainerRef}>
          {mounted ? (
            <>
              <Portal containerName="outer">Portaled content rendered at the outer container.</Portal>
              <Portal containerName="inner">Portaled content rendered at the end of the inner container.</Portal>
              <Portal>
                Portaled content rendered at <code>&lt;BaseStyles&gt;</code> root.
              </Portal>
            </>
          ) : null}
          Inner container
        </Box>
      </Box>
    </>
  )
}
