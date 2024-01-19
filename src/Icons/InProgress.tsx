import React from 'react'

export default function ({
  color = 'black',
}: {
  color: string | undefined
}): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 17 21"
      fill="none"
    >
      <path
        d="M7.5 0C9.22674 2.05911e-08 10.9268 0.425849 12.4497 1.23983C13.9725 2.0538 15.2711 3.23078 16.2304 4.66651C17.1898 6.10224 17.7802 7.7524 17.9494 9.47082C18.1187 11.1892 17.8615 12.9229 17.2007 14.5182C16.5399 16.1135 15.4959 17.5212 14.1611 18.6166C12.8263 19.712 11.242 20.4614 9.54845 20.7982C7.85489 21.1351 6.1044 21.0491 4.45201 20.5479C2.79963 20.0466 1.29637 19.1456 0.075381 17.9246L7.5 10.5V0Z"
        fill={color}
      />
    </svg>
  )
}
