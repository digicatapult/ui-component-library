import React from 'react'

export default function ({
  color = '#1A1A1A',
}: {
  color?: string
}): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 40 40"
      fill="none"
    >
      <rect opacity="0.8" width="40" height="40" rx="10" fill={color} />
      <path
        d="M16 12L23.0717 17.6574C24.573 18.8584 24.573 21.1416 23.0717 22.3426L16 28"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  )
}
