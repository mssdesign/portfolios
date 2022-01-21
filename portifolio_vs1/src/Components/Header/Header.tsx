import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="navbar__menu">
      <a href="/" className="navbar__menu--links">
        Página Inicial
      </a>
      <a href="/" className="navbar__menu--links">
        UX/UI Designs
      </a>
      <a href="/" className="navbar__menu--links active">
        Webpages
      </a>
      <a href="/" className="navbar__menu--links" id="button">
        Mobile Apps
      </a>
    </div>
  )
}

export default Header
