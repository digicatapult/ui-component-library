import React from 'react'
import styled from 'styled-components'

export type Props = {
  fullName?: string
  size?: string
  color?: string
  bgColor?: string
  outlineColor?: string
}

const defaults: Required<Props> = {
  fullName: 'A A',
  size: '4em',
  color: '#efefef',
  bgColor: '#1E5CbA',
  outlineColor: '#101010',
}

const getInitialsFromName = (fullName: string) => {
  const allInitials = !!fullName
    ? fullName
        .split(' ')
        .filter((s) => !!s)
        .map((s) => s[0])
    : []

  // 3 case: no initials, 1 initial, more than 1 initial
  switch (allInitials.length) {
    case 0:
      return 'AA'
    case 1:
      return allInitials[0]
    default:
      return allInitials[0] + allInitials[allInitials.length - 1]
  }
}

const UserIcon: React.FC<Props> = (props) => {
  const withDefaults = { ...defaults, ...props }
  const initials = getInitialsFromName(withDefaults.fullName)
  return (
    <Wrapper {...withDefaults}>
      <p>{initials}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div<Required<Props>>`
  box-sizing: border-box;
  display: grid;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size};
  font-size: calc(${({ size }) => size} / 4);
  text-transform: uppercase;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  border: calc(${({ size }) => size} * 0.065) solid
    ${({ outlineColor }) => outlineColor};
  color: ${({ color }) => color};
  background: ${({ bgColor }) => bgColor};
`

export default UserIcon
