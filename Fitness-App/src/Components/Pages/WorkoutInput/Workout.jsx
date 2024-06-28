import React, { useState } from 'react';
import SetCard from './SetCard';
import Title from './Title';
import './Workout.css';

function Workout() {
  const [setCards, setSetCards] = useState([
    { exerciseName: "Bench Press", previous: "130 x 5" },
    { exerciseName: "Incline Smith Bench Press", previous: "135 x 5" },
  ]);

  const addSetCard = () => {
    setSetCards([...setCards, { exerciseName: "", previous: "" }]);
  };
  return (
    <>
      <div className='workout-split-half'> 
        <div className='left-side'>
          <div className='title'>
            <Title />
          </div>
          <div className='exercise-section'>
            {setCards.map((setCard, index) => (
              <SetCard
                key={index}
                exerciseName={setCard.exerciseName}
                previous={setCard.previous}
              />
            ))}
            <button className='add-set-card-button' onClick={addSetCard}>
              Add Exercise
          </button>
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
