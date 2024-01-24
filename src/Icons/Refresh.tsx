import React from 'react'

export default function ({
  color = '#1A1A1A',
}: {
  color?: string
}): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M16.3922 19.6077C20.5939 17.1819 22.0334 11.8093 19.6076 7.6077C17.1818 3.40608 11.8093 1.9665 7.60764 4.3923C3.40602 6.81811 1.96644 12.1907 4.39225 16.3923C5.56465 18.423 7.42538 19.8085 9.50957 20.4242"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
      <path
        d="M8.5 15.5C8.5 15.5 9.71867 19.3099 10 20.5L4.40543 21.7726"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  )
}
