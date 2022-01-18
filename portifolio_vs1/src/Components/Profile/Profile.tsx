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
        <p className="legend">
          Olá, me chamo <strong className="legend-name">Matheus Soares</strong>
        </p>
      </div>
      <div className="callToAction">
        <p>Ver projetos</p>
        <img src={Avatar} />
      </div>
    </div>
  )
}

export default Profile
