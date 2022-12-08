import {ForwardRefComponent as PolymorphicForwardRefComponent} from '../utils/polymorphic'
import {useSSRSafeId} from '@react-aria/ssr'
import React from 'react'
import styled from 'styled-components'
import Box, {BoxProps} from '../Box'
import sx, {BetterSystemStyleObject, merge, SxProp} from '../sx'
import {useTheme} from '../ThemeProvider'
import {ActionListContainerContext} from './ActionListContainerContext'
import {ActionListGroupProps, GroupContext} from './Group'
import {ActionListProps, ListContext} from './List'
import {Selection} from './Selection'
import {ActionListItemProps, Slots, TEXT_ROW_HEIGHT, getVariantStyles} from './shared'

const LiBox = styled.li<SxProp>(sx)

export const Item = React.forwardRef<HTMLLIElement, ActionListItemProps>(
  (
    {
      variant = 'default',
      disabled = false,
      selected = undefined,
      active = false,
      onSelect,
      sx: sxProp = {},
      id,
      role,
      _PrivateItemWrapper,
      ...props
    },
    forwardedRef,
  ): JSX.Element => {
    const {variant: listVariant, showDividers, selectionVariant: listSelectionVariant} = React.useContext(ListContext)
    const {selectionVariant: groupSelectionVariant} = React.useContext(GroupContext)
    const {container, afterSelect, selectionAttribute} = React.useContext(ActionListContainerContext)

    let selectionVariant: ActionListProps['selectionVariant'] | ActionListGroupProps['selectionVariant']
    if (typeof groupSelectionVariant !== 'undefined') selectionVariant = groupSelectionVariant
    else selectionVariant = listSelectionVariant

    /** Infer item role based on the container */
    let itemRole: ActionListItemProps['role']
    if (container === 'ActionMenu' || container === 'DropdownMenu') {
      if (selectionVariant === 'single') itemRole = 'menuitemradio'
      else if (selectionVariant === 'multiple') itemRole = 'menuitemcheckbox'
      else itemRole = 'menuitem'
    }

    const {theme} = useTheme()

    const activeStyles = {
      fontWeight: 'bold',
      bg: 'actionListItem.default.selectedBg',
      '&::after': {
        position: 'absolute',
        top: 'calc(50% - 12px)',
        left: -2,
        width: '4px',
        height: '24px',
        content: '""',
        bg: 'accent.fg',
        borderRadius: 2,
      },
    }

    const styles = {
      position: 'relative',
      display: 'flex',
      paddingX: 2,
      fontSize: 1,
      paddingY: '6px', // custom value off the scale
      lineHeight: TEXT_ROW_HEIGHT,
      minHeight: 5,
      marginX: listVariant === 'inset' ? 2 : 0,
      borderRadius: listVariant === 'inset' ? 2 : 0,
      transition: 'background 33.333ms linear',
      color: getVariantStyles(variant, disabled).color,
      cursor: 'pointer',
      '&[aria-disabled]': {cursor: 'not-allowed'},

      // Button reset styles (to support as="button")
      appearance: 'none',
      background: 'unset',
      border: 'unset',
      width: 'calc(100% - 16px)',
      fontFamily: 'unset',
      textAlign: 'unset',
      marginY: 'unset',

      '@media (hover: hover) and (pointer: fine)': {
        ':hover:not([aria-disabled])': {
          backgroundColor: `actionListItem.${variant}.hoverBg`,
          color: getVariantStyles(variant, disabled).hoverColor,
        },
        ':focus:not([data-focus-visible-added]), > a:focus:not([data-focus-visible-added])': {
          backgroundColor: `actionListItem.${variant}.selectedBg`,
          color: getVariantStyles(variant, disabled).hoverColor,
          outline: 'none',
        },
        '&[data-focus-visible-added], > a[data-focus-visible-added]': {
          // we don't use :focus-visible because not all browsers (safari) have it yet
          outline: 'none',
          border: `2 solid`,
          boxShadow: `0 0 0 2px ${theme?.colors.accent.emphasis}`,
        },
        ':active:not([aria-disabled])': {
          backgroundColor: `actionListItem.${variant}.activeBg`,
          color: getVariantStyles(variant, disabled).hoverColor,
        },
      },

      '@media (forced-colors: active)': {
        ':focus': {
          // Support for Windows high contrast https://sarahmhigley.com/writing/whcm-quick-tips
          outline: 'solid 1px transparent !important',
        },
      },

      /** Divider styles */
      '[data-component="ActionList.Item--DividerContainer"]': {
        position: 'relative',
      },
      '[data-component="ActionList.Item--DividerContainer"]::before': {
        content: '" "',
        display: 'block',
        position: 'absolute',
        width: '100%',
        top: '-7px',
        border: '0 solid',
        borderTopWidth: showDividers ? `1px` : '0',
        borderColor: 'var(--divider-color, transparent)',
      },
      // show between 2 items
      ':not(:first-of-type)': {'--divider-color': theme?.colors.actionListItem.inlineDivider},
      // hide divider after dividers & group header, with higher importance!
      '[data-component="ActionList.Divider"] + &': {'--divider-color': 'transparent !important'},
      // hide border on current and previous item
      '&:hover:not([aria-disabled]), &:focus:not([aria-disabled]), &[data-focus-visible-added]:not([aria-disabled])': {
        '--divider-color': 'transparent',
      },
      '&:hover:not([aria-disabled]) + &, &:focus:not([aria-disabled]) + &, &[data-focus-visible-added] + li': {
        '--divider-color': 'transparent',
      },
      ...(active ? activeStyles : {}),
    }

    const clickHandler = React.useCallback(
      event => {
        if (disabled) return
        if (!event.defaultPrevented) {
          if (typeof onSelect === 'function') onSelect(event)
          // if this Item is inside a Menu, close the Menu
          if (typeof afterSelect === 'function') afterSelect()
        }
      },
      [onSelect, disabled, afterSelect],
    )

    const keyPressHandler = React.useCallback(
      event => {
        if (disabled) return
        if (!event.defaultPrevented && [' ', 'Enter'].includes(event.key)) {
          if (typeof onSelect === 'function') onSelect(event)
          // if this Item is inside a Menu, close the Menu
          if (typeof afterSelect === 'function') afterSelect()
        }
      },
      [onSelect, disabled, afterSelect],
    )

    // use props.id if provided, otherwise generate one.
    const labelId = useSSRSafeId(id)
    const inlineDescriptionId = useSSRSafeId(id && `${id}--inline-description`)
    const blockDescriptionId = useSSRSafeId(id && `${id}--block-description`)

    const ItemWrapper = _PrivateItemWrapper || React.Fragment

    return (
      <Slots context={{variant, disabled, inlineDescriptionId, blockDescriptionId}}>
        {slots => (
          <LiBox
            ref={forwardedRef}
            sx={merge<BetterSystemStyleObject>(styles, sxProp)}
            onClick={clickHandler}
            onKeyPress={keyPressHandler}
            aria-disabled={disabled ? true : undefined}
            tabIndex={disabled || _PrivateItemWrapper ? undefined : 0}
            aria-labelledby={`${labelId} ${slots.InlineDescription ? inlineDescriptionId : ''}`}
            aria-describedby={slots.BlockDescription ? blockDescriptionId : undefined}
            role={role || itemRole}
            {...(selectionAttribute && {[selectionAttribute]: selected})}
            {...props}
          >
            <ItemWrapper>
              <Selection selected={selected} />
              {slots.LeadingVisual}
              <Box
                data-component="ActionList.Item--DividerContainer"
                sx={{display: 'flex', flexDirection: 'column', flexGrow: 1, minWidth: 0}}
              >
                <ConditionalBox if={Boolean(slots.TrailingVisual)} sx={{display: 'flex', flexGrow: 1}}>
                  <ConditionalBox
                    if={Boolean(slots.InlineDescription)}
                    sx={{display: 'flex', flexGrow: 1, alignItems: 'baseline', minWidth: 0}}
                  >
                    <Box as="span" id={labelId} sx={{flexGrow: slots.InlineDescription ? 0 : 1}}>
                      {props.children}
                    </Box>
                    {slots.InlineDescription}
                  </ConditionalBox>
                  {slots.TrailingVisual}
                </ConditionalBox>
                {slots.BlockDescription}
              </Box>
            </ItemWrapper>
          </LiBox>
        )}
      </Slots>
    )
  },
) as PolymorphicForwardRefComponent<'li', ActionListItemProps>

Item.displayName = 'ActionList.Item'

const ConditionalBox: React.FC<React.PropsWithChildren<{if: boolean} & BoxProps>> = props => {
  const {if: condition, ...rest} = props

  if (condition) return <Box {...rest}>{props.children}</Box>
  else return <>{props.children}</>
}
