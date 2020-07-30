import React from 'react'

import ButtonLink from '../Button/index'
import Logo from '../../assets/logo.png'
import './index.css'

function Menu () {
  return (
    <div className="menu">
      <a href="/">
        <img className="logo" src={Logo} alt="logo com a fonte do logo da twitch escrito Fawkes"/>
      </a>
      <ButtonLink className="buttonLink" href="/">
        New Qué ota
      </ButtonLink>
    </div>
  )
}

export default Menu