import express from 'express';
import Workout from '../models/workout_model.js';

const router = express.Router();

// get all workouts
router.get('/', async (req, res) => {
  try {
    const workouts = await Workout.find({});
    res.json(workouts);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

// Post a new workout
router.post('/', async (req, res) => {
  try {
    const { exercises, duration } = req.body;
    const newWorkout = new Workout({ exercises, duration });
    await newWorkout.save();
    res.status(201).send('Workout data saved successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

export default router;
