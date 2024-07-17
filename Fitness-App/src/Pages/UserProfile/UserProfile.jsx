import React from 'react';
import '../../assets/UserProfile.css';
import MonthlyCalendar from './MonthlyCalendar'
import profile_icon from '../../assets/UserProfile.jpg';

const UserProfile = () => {
    return (
        <div className="UserCard">
            <div className="split-thirds">
                <div className="third">
                    <div className="gradient">
                        <div className="profile-down">
                            <img src={profile_icon} alt="" />
                            <div className="profile-title">Default User / Tom Platz</div>
                            <div className="profile-description">
                                I am a user of the app and I am yolked.
                                On a mission to bench four plates.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="third">
                    <div className="weekly-workouts">
                        <h2>Weekly Workouts:</h2>
                        <div className="workout-count">
                            <span>10</span>
                        </div>
                    </div>
                </div>
                <div className="third">
                    <div>
                        <MonthlyCalendar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;