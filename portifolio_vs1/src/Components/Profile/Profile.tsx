import React from 'react'
import Down from '../../Assets/down.svg'
import Avatar from '../../Assets/profileMe.png'
import './Profile.css'

const Profile = () => {
  return (
    <div className="background_Home">
      <div className="profile_Picture">
        <img className="avatar" src={Avatar} />
        <div className="legend">
          Olá, me chamo <strong className="legend-name">Matheus Soares</strong>
          <hr /> desenvolvedor front-end
        </div>
      </div>
      <div className="callToAction">
        <p>Ver projetos</p>
        <img src={Down} />
      </div>
    </div>
  )
}

export default Profile
