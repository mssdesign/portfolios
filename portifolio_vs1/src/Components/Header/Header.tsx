import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="navbar__menu">
      <a href="/" className="navbar__menu--links active">
        Página Inicial
      </a>
      <a href="/" className="navbar__menu--links">
        Perfil
      </a>
      <a href="/" className="navbar__menu--links">
        Projetos
      </a>
      <a href="/" className="navbar__menu--links" id="button">
        Contato
      </a>
    </div>
  )
}

export default Header
