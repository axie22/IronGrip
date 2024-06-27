import React from 'react';
import SetCard from './SetCard';
import Title from './Title';
import './Workout.css';

function Workout() {
  return (
    <>
      <div className='title'>
        <Title />
      </div>
      <div>
        <SetCard
          exerciseName="Bench Press"
          previous="130 x 5"
          weight="185"
          reps="10"
        />
      </div>
      
    </>
    
  );
}

export default Workout
