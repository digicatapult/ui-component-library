import React, { PropsWithChildren, useEffect, useRef } from 'react'
import styled from 'styled-components'

export interface DialogProps {
  includeClose?: boolean
  modalBackdropColor?: string

  borderRadius?: string
  padding?: string
  margin?: string
  border?: string
  boxShadow?: string
  width?: string
  height?: string
  maxHeight?: string
}

const Dialog = React.forwardRef<
  HTMLDialogElement,
  PropsWithChildren<DialogProps>
>(
  (
    {
      children,
      includeClose = true,
      borderRadius = '20px',
      padding = '0',
      margin = '0 auto',
      border = '0',
      boxShadow = '5px 5px 5px #90909090',
      width = 'fit-content',
      height,
      modalBackdropColor = 'unset',
      maxHeight,
    },
    dialogRef
  ) => {
    return (
      <Wrapper
        ref={dialogRef}
        modalBackdropColor={modalBackdropColor}
        borderRadius={borderRadius}
        padding={padding}
        margin={margin}
        border={border}
        boxShadow={boxShadow}
        width={width}
        height={height}
        maxHeight={maxHeight}
      >
        <DialogForm method="dialog">
          {includeClose ? <CloseButton /> : null}
          {children}
        </DialogForm>
      </Wrapper>
    )
  }
)

const Wrapper = styled.dialog<DialogProps>`
  position: absolute;
  overflow: hidden;

  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
  border: ${({ border }) => border};
  box-shadow: ${({ boxShadow }) => boxShadow};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};

  ::backdrop {
    background: ${({ modalBackdropColor }) => modalBackdropColor};
  }
`

const DialogForm = styled.form`
  display: inline-block;
  position: relative;
  overflow: auto;
  max-height: inherit;
  height: inherit;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1em;
  right: 1em;
  width: 1.5em;
  height: 1.5em;
  border: 0;
  padding: 0;
  background: transparent;

  ::before,
  ::after {
    content: '';
    position: absolute;
    left: 0;
    height: 2px;
    width: calc(100% * 1.41);
    background: black;
  }

  ::before {
    transform: translateX(-0.3075em) rotateZ(45deg);
  }

  ::after {
    transform: translateX(-0.3075em) rotateZ(-45deg);
  }
`

export default Dialog
