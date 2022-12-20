import React, { PropsWithChildren, useEffect, useRef, useState } from 'react'
import { Story } from '@storybook/react'
import styled from 'styled-components'

import { Grid, Section } from '../'
import { default as DialogComponent } from './index'

export default {
  title: 'Components/Dialog',
  component: DialogComponent,
  argTypes: {
    includeClose: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const DialogStoryTemplate: Story = (args) => {
  return <DefaultStoryHost {...args} useModal={false} />
}
export const Dialog = DialogStoryTemplate.bind({})
Dialog.args = {
  includeClose: true,
  modalBackdropColor: 'rgba(255, 0, 0, 0.05)',
}

const ModalStoryTemplate: Story = (args) => {
  return <DefaultStoryHost {...args} useModal={true} />
}
export const Modal = ModalStoryTemplate.bind({})
Modal.args = {
  includeClose: true,
  modalBackdropColor: 'rgba(255, 0, 0, 0.05)',
}

const DefaultStoryHost: React.FC<any> = ({ useModal, ...args }) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const listener = () => {
      setIsOpen(false)
    }
    const dialog = dialogRef.current
    dialog?.addEventListener('close', listener)

    return () => dialog?.removeEventListener('close', listener)
  })

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          if (!isOpen) {
            if (useModal) dialogRef.current?.showModal()
            else dialogRef.current?.show()
          } else dialogRef.current?.close()
        }}
      >
        {!isOpen ? 'Open' : 'Close'}
      </button>
      <DialogComponent ref={dialogRef} {...args}>
        <MockContent />
      </DialogComponent>
    </div>
  )
}

const MockContent = styled.div`
  margin: 2ch;
  background: cyan;
  width: 300px;
  height: 300px;
`

export const HII: Story = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const listener = () => {
      setIsOpen(false)
    }
    const dialog = dialogRef.current
    dialog?.addEventListener('close', listener)

    return () => dialog?.removeEventListener('close', listener)
  })

  return (
    <div style={{
      height:"600px",
      background: '#e0e0f0'
    }}>
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          if (!isOpen) {
            dialogRef.current?.show()
          } else {
            dialogRef.current?.close()
          }
        }}
      >
        {!isOpen ? 'Open' : 'Close'}
      </button>
      <DialogComponent ref={dialogRef} includeClose={true}>
        <Section headingLevel={2} title="Name" padding="1em 1.5em" width='47ch' headingSize="2em" background='white'>
          <Grid areas={[]} rows={["auto"]} columns={["auto"]} gap="1em">
            <span>Name of Lead Partner</span>
            <Section headingLevel={3} title="Project details" padding='1em 1.5em' margin="0 -1.5em" background='#dfe667' headingSize="1em" >
              Scope / goal - The £33 million Low Carbon Hydrogen Supply competition aimed to accelerate the development of low carbon bulk hydrogen supply solutions in specific sectors. It was aimed at projects at a TRL of 4 to 7, which could result in lower capital or operating costs when compared to Steam Methane Reformation with Carbon Capture & Storage (SMR+CCS), or improve the carbon capture rates at a comparable cost.
            </Section>
            <Section headingLevel={3} title="Funding" padding='0em 0' headingSize="1em" background='white'>
              £240m
            </Section>
          </Grid>
        </Section>
      </DialogComponent>
    </div>
  )
}
