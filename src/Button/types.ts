import React, {ComponentPropsWithRef} from 'react'
import styled from 'styled-components'
import {IconProps} from '@primer/octicons-react'
import sx, {SxProp} from '../sx'
import getGlobalFocusStyles from '../_getGlobalFocusStyles'

export const StyledButton = styled.button<SxProp>`
  ${getGlobalFocusStyles('-2px')};
  ${sx};
`

export type VariantType = 'default' | 'primary' | 'invisible' | 'danger' | 'outline'

export type Size = 'small' | 'medium' | 'large'

/**
 * Remove styled-components polymorphic as prop, which conflicts with radix's
 */
type StyledButtonProps = Omit<ComponentPropsWithRef<typeof StyledButton>, 'as'>

type ButtonA11yProps =
  | {'aria-label': string; 'aria-labelledby'?: never}
  | {'aria-label'?: never; 'aria-labelledby': string}

export type ButtonBaseProps = {
  /**
   * Determine's the styles on a button one of 'default' | 'primary' | 'invisible' | 'danger'
   */
  variant?: VariantType
  /**
   * Size of button and fontSize of text in button
   */
  size?: Size
  /**
   * Items that are disabled can not be clicked, selected, or navigated through.
   */
  disabled?: boolean
} & SxProp &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  StyledButtonProps

export type ButtonProps = {
  /**
   * The leading icon comes before button content
   */
  leadingIcon?: React.FunctionComponent<React.PropsWithChildren<IconProps>>
  /**
   * The trailing icon comes after button content
   */
  trailingIcon?: React.FunctionComponent<React.PropsWithChildren<IconProps>>
  children: React.ReactNode
} & ButtonBaseProps

export type IconButtonProps = ButtonA11yProps & {
  icon: React.FunctionComponent<React.PropsWithChildren<IconProps>>
} & ButtonBaseProps

// adopted from React.AnchorHTMLAttributes
export type LinkButtonProps = {
  underline?: boolean
  download?: string
  href?: string
  hrefLang?: string
  media?: string
  ping?: string
  rel?: string
  target?: string
  type?: string
  referrerPolicy?: React.AnchorHTMLAttributes<HTMLAnchorElement>['referrerPolicy']
}
