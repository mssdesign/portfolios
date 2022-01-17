import React from "react"
import './Profile.css'

const Profile = () => {
    return (
        <div className="background_Home">
            <div className="profile_Picture">
                <img className="avatar" src={require("../../Assets/profileMe.png")} alt="" />
            </div>
        </div>
    )
}

export default Profile
