import { FunctionComponent } from 'react'
import { Label } from '../Label'
import { StyledError, StyledInputWrapper } from './style'

interface FormFieldWrapperProps {
  children: React.ReactNode
  label?: React.ReactNode
  helperMessage?: React.ReactNode
  id?: string
  error?: string
  tooltipMessage?: string
}

export const FormFieldWrapper: FunctionComponent<FormFieldWrapperProps> = ({
  label,
  helperMessage,
  id,
  children,
  error,
  tooltipMessage,
}) => {
  return (
    <StyledInputWrapper>
      {label && (
        <Label
          label={label}
          id={id}
          tooltipMessage={tooltipMessage}
          helperMessage={helperMessage}
        />
      )}
      {children}
      {error && <StyledError>{error}</StyledError>}
    </StyledInputWrapper>
  )
}
