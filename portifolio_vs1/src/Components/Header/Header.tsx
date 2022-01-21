import React from 'react'
import './Header.css'
import { BrowserRouter, Switch, Router, Link, Route } from 'react-router-dom'

const Header = () => {
  return (
    <div className="navbar__menu">
      <BrowserRouter>
        <Link to="/" className="navbar__menu--links active">
          Página Inicial
        </Link>
        <Link to="/" className="navbar__menu--links">
          UX/UI Designs
        </Link>
        <Link to="/" className="navbar__menu--links">
          Webpages
        </Link>
        <Link to="/" className="navbar__menu--links" id="button">
          Mobile Apps
        </Link>
      </BrowserRouter>
    </div>
  )
}

export default Header
