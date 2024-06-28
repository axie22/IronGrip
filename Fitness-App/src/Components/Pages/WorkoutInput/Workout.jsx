import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import SetCard from './SetCard';
import Title from './Title';
import './Workout.css';

function Workout() {
  const [setCards, setSetCards] = useState([
    { exerciseName: "Bench Press", previous: "130 x 5" },
    { exerciseName: "Incline Smith Bench Press", previous: "135 x 5" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [newExerciseName, setNewExerciseName] = useState("");

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleAddSetCard = () => {
    setSetCards([...setCards, { exerciseName: newExerciseName, previous: "" }]);
    setNewExerciseName("");
    handleCloseModal();
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
            <Button className='add-set-card-button' onClick={handleShowModal}>
              Add Exercise
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
                      onChange={(e) => setNewExerciseName(e.target.value)}
                      placeholder="Enter exercise name"
                    />
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
    </>
  );
}

export default Workout;
