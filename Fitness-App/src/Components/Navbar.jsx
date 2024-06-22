import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-logo'>
                Workout App
            </div>
            <ul className='navbar-menu'>
                <li><Link to="/">LandingPage</Link></li>
                <li><Link to="/workoutinput">WorkoutInput</Link></li>
            </ul>
        </div>
    )
}

export default Navbar