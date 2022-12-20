import React, { PropsWithChildren, useEffect, useRef } from 'react'
import styled from 'styled-components'

export interface DialogProps {
  includeClose?: boolean
  modalBackdropColor?: string
}

const Dialog = React.forwardRef<
  HTMLDialogElement,
  PropsWithChildren<DialogProps>
>(({ children, includeClose = true, modalBackdropColor }, dialogRef) => {
  return (
    <Wrapper ref={dialogRef} modalBackdropColor={modalBackdropColor}>
      <DialogForm method="dialog">
        {includeClose ? <CloseButton /> : null}
        {children}
      </DialogForm>
    </Wrapper>
  )
})

const Wrapper = styled.dialog<DialogProps>`
  border-radius: 20px;
  padding: 0;
  overflow: hidden;
  border: 0;
  box-shadow: 5px 5px 5px #90909090;

  ::backdrop {
    background: ${({ modalBackdropColor }) => modalBackdropColor || 'unset'};
  }
`

const DialogForm = styled.form`
  display: inline-block;
  position: relative;
  overflow: scroll;
  width: 100%;
  height: 100%;
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
