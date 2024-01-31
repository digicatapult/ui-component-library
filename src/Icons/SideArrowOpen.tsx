import React from 'react'

export default function ({
  color = '#686867',
}: {
  color: string | undefined
}): React.ReactElement {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none">
  <path opacity="0.8" d="M21.5 24.9678L11.5 24.9678C5.14873 24.9678 5.27193e-06 19.819 4.71668e-06 13.4678L4.54466e-06 11.5001C3.98941e-06 5.14878 5.14873 5.29279e-05 11.5 5.23726e-05L21.5 5.14984e-05L21.5 24.9678Z" fill={color}/>
  <path d="M14.9807 17.4775L10.0565 13.5382C9.38095 12.9977 9.38095 11.9703 10.0565 11.4298L14.9807 7.49045" stroke="white" stroke-width="0.9" stroke-linecap="round"/>
</svg>
  )
}
