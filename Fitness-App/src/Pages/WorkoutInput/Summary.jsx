import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function Summary({ show, handleClose, workoutDuration, exerciseCount }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Workout Summary</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Workout Duration: {workoutDuration} minutes</p>
        <p>Exercises Completed: {exerciseCount}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Summary;
