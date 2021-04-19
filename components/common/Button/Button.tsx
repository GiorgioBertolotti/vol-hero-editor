import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FunctionComponent } from 'react'

export enum ButtonType {
  PRIMARY = 'bg-green-500 border-green-600 text-white',
  SUCCESS = 'bg-green-500 border-green-600 text-white',
  DANGER = 'bg-red-500 border-red-600 text-white',
}

interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
  label?: string
  icon?: IconDefinition
  buttonType?: ButtonType
  className?: string
}

const Button: FunctionComponent<IButtonProps> = (props) => {
  const {
    label = '',
    icon,
    className,
    buttonType: buttonType = ButtonType.PRIMARY,
    type,
    ...rest
  } = props

  const renderButton = (children: JSX.Element | string): JSX.Element => (
    <button
      {...rest}
      type={type as 'button' | 'submit' | 'reset' | undefined}
      className={`align-baseline rounded-lg py-2 px-4 border-b-2 ${buttonType} ${className}`}
    >
      {children}
    </button>
  )

  return icon ? renderButton(<FontAwesomeIcon icon={icon} />) : renderButton(label)
}

export default Button
