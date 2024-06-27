import React from 'react';
import SetCard from './SetCard';
import Title from './Title';
import './Workout.css';

function Workout() {
  return (
    <>
      <div className='split-half'> 
        <div>
          <div className='title'>
            <Title />
          </div>
          <div className='exercise-section'>
            <div className='exercise'>
              <SetCard
                exerciseName="Bench Press"
                previous="130 x 5"
                weight="185"
                reps="10"
              />
            </div>
          </div>
        </div>
        
        <div>
          <h1>Other half</h1>
        </div>
      </div>      
    </>
    
  );
}

export default Workout
