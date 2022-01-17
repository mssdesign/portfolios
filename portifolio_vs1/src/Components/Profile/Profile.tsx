import React from "react"

const Profile = () => {
    return (
        <div>
            <div className="profile_Picture">
                <p>picture</p>
                <img src={require("../../Assets/profileMe.png")} alt="" />
            </div>
        </div>
    )
}

export default Profile
