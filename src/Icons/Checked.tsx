import React from 'react'

export default function ({
  color = '#a7a7a7',
}: {
  color: string | undefined
}): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="13"
      viewBox="0 0 17 13"
      fill="none"
    >
      <path d="M1 5.5L6 10.5L15.5 1" stroke={color} strokeWidth="2.5" />
    </svg>
  )
}
