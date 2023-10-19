import React from 'react'

export interface FormGroupProps {
  styles?: React.CSSProperties
  onSubmit: (e: React.FormEvent) => void
}

const FormGroup: React.FC<React.PropsWithChildren<FormGroupProps>> = ({ children, ...props }) => {
  return <form onSubmit={props.onSubmit}>{children}</form>
}

export default FormGroup 
