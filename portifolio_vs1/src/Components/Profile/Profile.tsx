import React from "react"
import './Profile.css'

const Profile = () => {
    return (
        <div className="background_Home">
            <div className="profile_Picture">
                <img className="avatar" src={require("../../Assets/profileMe.png")} alt="" />
            </div>
            <p className="legend">Olá, me chamo <strong className="legend-name">Matheus Soares</strong></p>
        </div>
    )
}

export default Profile
