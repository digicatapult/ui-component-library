import React from 'react'

export default function ({
  color = '#686867',
}: {
  color: string | undefined
}): React.ReactElement {

  return (
<svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
  <path opacity="0.8" d="M0.499998 0L10.5 -1.74845e-06C16.8513 -2.85895e-06 22 5.14872 22 11.5L22 13.4677C22 19.819 16.8513 24.9677 10.5 24.9677L0.500002 24.9677L0.499998 0Z" fill={color}/>
  <path d="M7.0193 7.4903L11.9435 11.4297C12.6191 11.9701 12.6191 12.9976 11.9435 13.538L7.0193 17.4774" stroke="white" stroke-width="0.9" stroke-linecap="round"/>
</svg>
  )
}
