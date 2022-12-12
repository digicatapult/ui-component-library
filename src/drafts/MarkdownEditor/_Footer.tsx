import React, {memo, useContext} from 'react'
import {AlertIcon, ImageIcon, MarkdownIcon} from '@primer/octicons-react'

import {Spinner, Button, ButtonProps, LinkButton, Box, Text} from '../..'
import {MarkdownEditorContext} from './_MarkdownEditorContext'

const uploadingNote = ([current, total]: [number, number]) =>
  total === 1 ? `Uploading your file...` : `Uploading your files... (${current}/${total})`

export const Footer = ({
  actionButtons,
  uploadButtonProps,
  fileUploadProgress,
  fileDraggedOver,
  errorMessage,
  previewMode,
}: {
  actionButtons: React.ReactNode
  uploadButtonProps: Partial<ButtonProps> | null
  fileUploadProgress?: [number, number]
  fileDraggedOver: boolean
  errorMessage?: string
  previewMode: boolean
}) => (
  <Box sx={{pt: 2, display: 'flex', gap: 2, justifyContent: 'space-between', minHeight: '36px'}} as="footer">
    <Box sx={{display: 'flex', gap: 1, alignItems: 'center', fontSize: 0}}>
      {previewMode ? (
        <></>
      ) : fileUploadProgress ? (
        <Text sx={{py: 1, px: 2}}>
          <Spinner size="small" sx={{mr: 1, verticalAlign: 'text-bottom'}} /> {uploadingNote(fileUploadProgress)}
        </Text>
      ) : errorMessage ? (
        <ErrorMessage message={errorMessage} />
      ) : (
        <>
          <MarkdownSupportedHint />

          {uploadButtonProps && (
            <>
              <VisualSeparator />
              <FileUploadButton fileDraggedOver={fileDraggedOver} {...uploadButtonProps} />
            </>
          )}
        </>
      )}
    </Box>
    {!fileUploadProgress && <Box sx={{display: 'flex', gap: 2}}>{actionButtons}</Box>}
  </Box>
)

const ErrorMessage = memo(({message}: {message: string}) => (
  <Text sx={{py: 1, px: 2, color: 'danger.fg'}} aria-live="polite">
    <Text sx={{mr: 1}}>
      <AlertIcon size="small" />
    </Text>{' '}
    {message}
  </Text>
))

const FileUploadButton = memo(({fileDraggedOver, ...props}: Partial<ButtonProps> & {fileDraggedOver: boolean}) => {
  const {condensed, disabled} = useContext(MarkdownEditorContext)

  return (
    <Button
      variant="invisible"
      leadingIcon={ImageIcon}
      size="small"
      sx={{color: 'fg.default', fontWeight: fileDraggedOver ? 'bold' : 'normal', px: 2}}
      onMouseDown={(e: React.MouseEvent) => {
        // Prevent pulling focus from the textarea
        e.preventDefault()
      }}
      disabled={disabled}
      {...props}
    >
      {condensed ? 'Add files' : fileDraggedOver ? 'Drop to add files' : 'Paste, drop, or click to add files'}
    </Button>
  )
})

const VisualSeparator = memo(() => (
  <Box sx={{borderRightStyle: 'solid', borderRightWidth: 1, borderRightColor: 'border.muted', height: '100%'}} />
))

const MarkdownSupportedHint = memo(() => {
  const {condensed} = useContext(MarkdownEditorContext)

  return (
    <LinkButton
      leadingIcon={MarkdownIcon}
      variant="invisible"
      size="small"
      sx={{color: 'inherit', fontWeight: 'normal', px: 2}}
      href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"
      target="_blank"
      // The markdown editor aria-description already describes it as Markdown editor, so it's
      // redundant to say Markdown is supported again here. However for sighted users, they
      // cannot see the aria-description so this is a useful hint for them. So the aria-label
      // is different from the visible text content.
      aria-label="Markdown documentation"
    >
      {!condensed && <Text aria-hidden>Markdown is supported</Text>}
    </LinkButton>
  )
})
