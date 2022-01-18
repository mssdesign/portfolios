import React from 'react'
import Avatar from '../../Assets/down.svg'
import './Profile.css'

const Profile = () => {
  return (
    <div className="background_Home">
      <div className="profile_Picture">
        <img
          className="avatar"
          src={require('../../Assets/profileMe.png')}
          alt=""
        />
        <div className="legend">
          Olá, me chamo <strong className="legend-name">Matheus Soares</strong>
          <hr /> desenvolvedor front-end
        </div>
      </div>
      <div className="callToAction">
        <p>Ver projetos</p>
        <img src={Avatar} />
      </div>
    </div>
  )
}

export default Profile
