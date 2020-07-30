import React from 'react'
import ButtonBase from './styles'

function Button (props) {
  return (
    // <a className={props.className} href={props.href}>
    //   {props.children}
    // </a>
    <ButtonBase href={props.href}>
      {props.children}
    </ButtonBase>
  )
}

export default Button