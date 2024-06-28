import React from 'react';
import SetCard from './SetCard';
import Title from './Title';
import './Workout.css';

function Workout() {
  return (
    <>
      <div className='workout-split-half'> 
        <div className='left-side'>
          <div className='title'>
            <Title />
          </div>
          <div className='exercise-section'>
            <SetCard
              exerciseName="Bench Press"
              previous="130 x 5"
            />
            <SetCard 
              exerciseName="Incline Smith Bench Press"
              previous="135 x 5"
            />
          </div>
        </div>
        
        <div className='right-side'>
          <h1>Other half</h1>
        </div>
      </div>      
    </>
  );
}

export default Workout;
