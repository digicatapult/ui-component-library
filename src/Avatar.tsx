import styled from 'styled-components'
import {get} from './constants'
import sx, {SxProp} from './sx'
import {ComponentProps} from './utils/types'

type StyledAvatarProps = {
  /** Sets the width and height of the avatar. */
  size?: number
  /** Sets the shape of the avatar to a square if true. If false, the avatar will be circular. */
  square?: boolean
  /** URL of the avatar image. */
  src: string
  /** Provide alt text when the Avatar is used without the user's name next to it. */
  alt?: string
} & SxProp

function getBorderRadius({size, square}: StyledAvatarProps) {
  if (square) {
    return size && size <= 24 ? '4px' : '6px'
  } else {
    return '50%'
  }
}

const Avatar = styled.img.attrs<StyledAvatarProps>(props => ({
  height: props.size,
  width: props.size,
}))<StyledAvatarProps>`
  display: inline-block;
  overflow: hidden; // Ensure page layout in Firefox should images fail to load
  line-height: ${get('lineHeights.condensedUltra')};
  vertical-align: middle;
  border-radius: ${props => getBorderRadius(props)};
  box-shadow: 0 0 0 1px ${get('colors.avatar.border')};
  ${sx}
`
Avatar.defaultProps = {
  size: 20,
  alt: '',
  square: false,
}

export type AvatarProps = ComponentProps<typeof Avatar>
export default Avatar
