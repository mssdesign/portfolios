import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className="navbar__menu">
      <Link
        activeClass="active"
        spy={true}
        smooth={true}
        to="home"
        className="navbar__menu--links"
      >
        Página Inicial
      </Link>
      <Link
        spy={true}
        smooth={true}
        to="uiDesign"
        className="navbar__menu--links"
      >
        Interfaces
      </Link>
      <Link
        spy={true}
        smooth={true}
        to="webPages"
        className="navbar__menu--links"
      >
        Projetos Web
      </Link>
      <Link
        spy={true}
        smooth={true}
        to="mobileApps"
        className="navbar__menu--links"
        id="button"
      >
        Aplicativos
      </Link>
    </div>
  )
}

export default Header
