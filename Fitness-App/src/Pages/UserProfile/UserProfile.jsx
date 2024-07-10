import React from 'react'
import './UserProfile.css'
import profile_icon from '../../assets/UserProfile.jpg'

const UserProfile = () => {
    return (
        <div className="UserCard">
            <div className="gradient">
            <div className = "profile-down">
                <img src={profile_icon} alt="" />
                <div className="profile-title">Default User</div>
                <div className="profile-description">
                    I am a user of the app and I am yolked.
                </div>
            </div>
            </div>
        </div>
    )
}

export default UserProfile