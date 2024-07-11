import mongoose from 'mongoose';

const workoutSchema = new mongoose.Schema({
  exercises: Array,
  duration: Number,
  date: { type: Date, default: Date.now }
});

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
