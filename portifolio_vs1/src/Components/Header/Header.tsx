import React from 'react'
import './Header.css'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <div className="navbar__menu">
        <Link activeClass='active' spy={true} smooth={true} to="home" className="navbar__menu--links">
          Página Inicial
        </Link>
        <Link spy={true} smooth={true} to="uiDesign" className="navbar__menu--links">
          UI Designs
        </Link>
        <Link spy={true} smooth={true} to="webPages" className="navbar__menu--links">
          Webpages
        </Link>
        <Link spy={true} smooth={true} to="mobileApps" className="navbar__menu--links" id="button">
          Mobile Apps
        </Link>
    </div>
  )
}

export default Header
