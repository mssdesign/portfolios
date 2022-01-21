import React from 'react'
import Down from '../../Assets/down.svg'
import Avatar from '../../Assets/profileMe.png'
import { Link } from 'react-scroll'
import './Profile.css'

const Profile = () => {
  return (
    <div className="background_Home" id="home">
      <div className="profile_Picture">
        <img className="avatar" src={Avatar} />
        <div className="legend">
          Olá, me chamo <strong className="legend-name">Matheus Soares</strong>
          <hr /> Desenvolvedor Front-End
        </div>
      </div>
      <div className="callToAction">
        <Link to='uiDesign' spy={true} smooth={true}><p>Ver projetos</p></Link>
        <img src={Down} />
      </div>
    </div>
  )
}

export default Profile
