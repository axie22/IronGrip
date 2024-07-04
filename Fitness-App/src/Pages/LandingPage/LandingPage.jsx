import React from 'react';
import LastWorkout from './LastWorkout';
import ThisMonth from './ThisMonth';
import '../../assets/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className='split-half'> 
        <div>
          <LastWorkout />
        </div>
        <div>
          <ThisMonth />
        </div>
      </div>      
    </div>
  );
}

export default LandingPage;
