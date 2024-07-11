import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, Image, ListGroup, Modal } from 'react-bootstrap';
import '../../assets/Workout.css';
import SetCard from './SetCard';
import Summary from './Summary';
import Title from './Title';

function Workout() {
  const [setCards, setSetCards] = useState([
    { id: 1, exerciseName: "Bench Press", previous: "130 x 5" },
    { id: 2, exerciseName: "Incline Smith Bench Press", previous: "135 x 5" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [newExerciseName, setNewExerciseName] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState("");
  const [workoutStartTime, setWorkoutStartTime] = useState(null);
  const [workoutDuration, setWorkoutDuration] = useState(0);
  const [exerciseCount, setExerciseCount] = useState(0);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setSuggestions([]);
  };

  // Generate a unique ID using the current timestamp and a random number
  const generateUniqueId = () => {
    return `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`;
  };


  const handleAddSetCard = () => {
    {/**
      For now we'll set the previous to be empty 
      In the future we'll query our data base for the most recent exercise of the given exercise name
      Allow custom exercise name or selected exercise
    */}
    const newCard = {
      id: generateUniqueId(),
      exerciseName: selectedExercise || newExerciseName,
      previous: "",
    };
    setSetCards([...setCards, newCard]);
    setNewExerciseName("");
    setSelectedExercise("");
    handleCloseModal();
  };

  const handleExerciseNameChange = (e) => {
    const value = e.target.value;
    setNewExerciseName(value);
    if (value.length > 2) {
      fetchSuggestions(value);
    } else {
      setSuggestions([]);
    }
  };

  const deleteSetCard = (id) => {
    setSetCards(setCards.filter(card => card.id !== id));
  };

  const fetchSuggestions = async (query) => {
    try {
      const response = await axios.get(`https://wger.de/api/v2/exercise/search/?term=${query}`, {
        headers: {
          'Authorization': `Token 43d3394872c166ce1394ebe8e900fa62a314596f`
        }
      });
      const results = response.data.suggestions || [];
      setSuggestions(results.slice(0, 5));
    } catch (error) {
      console.error('Error fetching exercise suggestions:', error);
      setSuggestions([]);
    }
  };

  const handleUpdate = (id, data) => {
    setSetCards(prevSetCards =>
      prevSetCards.map(card =>
        card.id === id ? {...card, ...data} : card
      )
    );
  };

  const handleSubmit = async () => {
    console.log("Submitting the following data:");
    console.log(setCards);

    const endTime = new Date();
    const duration = Math.round((endTime - workoutStartTime) / 60000);
    setWorkoutDuration(duration);
    setExerciseCount(setCards.length);
    setShowSummary(true);

    /* Not finding file path*/
    try {
      await axios.post('http://localhost:3000/ExerciseDB/ExerciseDB', {  
        exercises: setCards,
        duration: duration
      });
      console.log('Workout data saved successfully');
    } catch (error) {
      console.error('Error saving workout data:', error);
    }

    setSetCards([]);
  };

  const handleSummaryClose = () => setShowSummary(false);

  useEffect(() => {
    setWorkoutStartTime(new Date());
  }, []);

  return (
    <>
      <div className='workout-split-half'> 
        <div className='left-side'>
          <div className='title'>
            <Title />
          </div>
          <div className='exercise-section'>
          {setCards.map((setCard) => (
              <SetCard
                key={setCard.id}
                id={setCard.id}
                exerciseName={setCard.exerciseName}
                previous={setCard.previous}
                deleteSetCard={deleteSetCard}
                onUpdate={handleUpdate}
              />
            ))}
            <Button className='add-set-card-button' onClick={handleShowModal}>
              Add Exercise
            </Button>
            <Button variant="success" className='submit-workout-button' onClick={handleSubmit}>
              Finish
            </Button>
          </div>          
        </div>
        
        <div className='right-side'>
          <h1>Other half</h1>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Exercise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formExerciseName">
              <Form.Label>Exercise Name</Form.Label>
              <Form.Control
                type="text"
                value={newExerciseName}
                onChange={handleExerciseNameChange}
                placeholder="Enter exercise name"
              />
              {suggestions.length > 0 && (
                <ListGroup>
                {suggestions.map((suggestion, index) => (
                  <ListGroup.Item
                    key={index}
                    action
                    onClick={() => {
                      setSelectedExercise(suggestion.data.name);
                      setNewExerciseName(suggestion.data.name);
                      setSuggestions([]);
                    }}
                  >
                    <div className="d-flex align-items-center">
                      {suggestion.data.image_thumbnail && (
                        <Image src={`https://wger.de${suggestion.data.image_thumbnail}`} rounded className="me-2" />
                      )}
                      <span>{suggestion.data.name}</span>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAddSetCard}>
            Add Exercise
          </Button>
        </Modal.Footer>
      </Modal>

      <Summary 
        show={showSummary} 
        handleClose={handleSummaryClose} 
        workoutDuration={workoutDuration}
        exerciseCount={exerciseCount} 
      />
    </>
  );
}

export default Workout;
