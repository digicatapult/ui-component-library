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
      <rect
        opacity="0.8"
        x="40"
        y="40"
        width="40"
        height="40"
        rx="10"
        transform="rotate(180 40 40)"
        fill={color}
      />
      <path
        d="M24 28L16.9283 22.3426C15.427 21.1416 15.427 18.8584 16.9283 17.6574L24 12"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  )
}
