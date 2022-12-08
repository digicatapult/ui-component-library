import {AlertFillIcon, CheckCircleFillIcon, IconProps} from '@primer/octicons-react'
import React from 'react'
import Box from './Box'
import Text from './Text'
import {SxProp} from './sx'
import {FormValidationStatus} from './utils/types/FormValidationStatus'

type Props = {
  id: string
  validationStatus?: FormValidationStatus
} & SxProp

const validationIconMap: Record<
  NonNullable<Props['validationStatus']>,
  React.ComponentType<React.PropsWithChildren<IconProps>>
> = {
  success: CheckCircleFillIcon,
  error: AlertFillIcon,
  warning: AlertFillIcon,
}

const validationColorMap: Record<NonNullable<Props['validationStatus']>, string> = {
  success: 'success.fg',
  error: 'danger.fg',
  warning: 'attention.fg',
}

const InputValidation: React.FC<React.PropsWithChildren<Props>> = ({children, id, validationStatus, sx}) => {
  const IconComponent = validationStatus ? validationIconMap[validationStatus] : undefined
  const fgColor = validationStatus ? validationColorMap[validationStatus] : undefined

  return (
    <Text
      sx={{
        fontSize: 0,
        fontWeight: 'bold',
        alignItems: 'center',
        color: fgColor,
        display: 'flex',
        a: {
          color: 'currentColor',
          textDecoration: 'underline',
        },
        ...sx,
      }}
    >
      {IconComponent && (
        <Box as="span" mr={1} sx={{display: 'flex'}} aria-hidden="true">
          <IconComponent size={12} fill="currentColor" />
        </Box>
      )}
      <span id={id}>{children}</span>
    </Text>
  )
}

export default InputValidation
