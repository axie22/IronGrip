import express from 'express';
import Workout from '../models/workout_model.js';

const router = express.Router();

router.post('/api/workouts', async (req, res) => {
  try {
    const { exercises, duration } = req.body;
    const newWorkout = new Workout({ exercises, duration });
    await newWorkout.save();
    res.status(201).send('Workout data saved successfully');
  } catch (error) {
    console.log('Error saving workout data:', error);  
    res.status(500).send('Server error');
  }
});

export default router;
