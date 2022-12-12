import {subscribe as subscribeToMarkdownPasting} from '@github/paste-markdown'
import React, {forwardRef, useEffect, useMemo, useRef, useState} from 'react'
import {useDynamicTextareaHeight} from '../hooks/useDynamicTextareaHeight'
import InlineAutocomplete, {ShowSuggestionsEvent, Suggestions} from '../InlineAutocomplete'
import Textarea, {TextareaProps} from '../../Textarea'
import {Emoji, useEmojiSuggestions} from './suggestions/_useEmojiSuggestions'
import {Mentionable, useMentionSuggestions} from './suggestions/_useMentionSuggestions'
import {Reference, useReferenceSuggestions} from './suggestions/_useReferenceSuggestions'
import {useRefObjectAsForwardedRef} from '../../hooks'
import {SuggestionOptions} from './suggestions'

interface MarkdownInputProps extends Omit<TextareaProps, 'onChange'> {
  value: string
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>
  disabled?: boolean
  placeholder?: string
  id: string
  maxLength?: number
  fullHeight?: boolean
  isDraggedOver: boolean
  emojiSuggestions?: SuggestionOptions<Emoji>
  mentionSuggestions?: SuggestionOptions<Mentionable>
  referenceSuggestions?: SuggestionOptions<Reference>
  minHeightLines: number
  maxHeightLines: number
  monospace: boolean
  pasteUrlsAsPlainText: boolean
  /** Use this prop to control visibility instead of unmounting, so the undo stack and custom height are preserved. */
  visible: boolean
}

export const MarkdownInput = forwardRef<HTMLTextAreaElement, MarkdownInputProps>(
  (
    {
      value,
      onChange,
      disabled,
      placeholder,
      id,
      maxLength,
      onKeyDown,
      fullHeight,
      isDraggedOver,
      emojiSuggestions,
      mentionSuggestions,
      referenceSuggestions,
      minHeightLines,
      maxHeightLines,
      visible,
      monospace,
      pasteUrlsAsPlainText,
      ...props
    },
    forwardedRef,
  ) => {
    const [suggestions, setSuggestions] = useState<Suggestions | null>(null)

    const {trigger: emojiTrigger, calculateSuggestions: calculateEmojiSuggestions} = useEmojiSuggestions(
      emojiSuggestions ?? [],
    )
    const {trigger: mentionsTrigger, calculateSuggestions: calculateMentionSuggestions} = useMentionSuggestions(
      mentionSuggestions ?? [],
    )
    const {trigger: referencesTrigger, calculateSuggestions: calculateReferenceSuggestions} = useReferenceSuggestions(
      referenceSuggestions ?? [],
    )

    const triggers = useMemo(
      () => [mentionsTrigger, referencesTrigger, emojiTrigger],
      [mentionsTrigger, referencesTrigger, emojiTrigger],
    )

    const onShowSuggestions = async (event: ShowSuggestionsEvent) => {
      setSuggestions('loading')
      if (event.trigger.triggerChar === emojiTrigger.triggerChar) {
        setSuggestions(await calculateEmojiSuggestions(event.query))
      } else if (event.trigger.triggerChar === mentionsTrigger.triggerChar) {
        setSuggestions(await calculateMentionSuggestions(event.query))
      } else if (event.trigger.triggerChar === referencesTrigger.triggerChar) {
        setSuggestions(await calculateReferenceSuggestions(event.query))
      }
    }

    const ref = useRef<HTMLTextAreaElement>(null)
    useRefObjectAsForwardedRef(forwardedRef, ref)

    useEffect(() => {
      const subscription =
        ref.current &&
        subscribeToMarkdownPasting(ref.current, {defaultPlainTextPaste: {urlLinks: pasteUrlsAsPlainText}})
      return subscription?.unsubscribe
    }, [pasteUrlsAsPlainText])

    const dynamicHeightStyles = useDynamicTextareaHeight({maxHeightLines, minHeightLines, element: ref.current, value})
    const heightStyles = fullHeight ? {} : dynamicHeightStyles

    return (
      <InlineAutocomplete
        triggers={triggers}
        suggestions={suggestions}
        onShowSuggestions={e => onShowSuggestions(e)}
        onHideSuggestions={() => setSuggestions(null)}
        sx={{flex: 'auto'}}
        tabInsertsSuggestions
      >
        <Textarea
          id={id}
          ref={ref}
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onKeyDown={onKeyDown}
          disabled={disabled}
          aria-label="Markdown value"
          onChange={onChange}
          sx={{
            width: '100%',
            borderStyle: 'none',
            height: fullHeight ? '100%' : undefined,
            outline: theme => {
              return isDraggedOver ? `solid 2px ${theme.colors.accent.fg}` : undefined
            },
            display: visible ? undefined : 'none',
            '& textarea': {
              lineHeight: 1.2,
              resize: fullHeight ? 'none' : 'vertical',
              p: 2,
              fontFamily: monospace ? 'mono' : 'normal',
              ...heightStyles,
            },
          }}
          {...props}
        />
      </InlineAutocomplete>
    )
  },
)
MarkdownInput.displayName = 'MarkdownInput'
