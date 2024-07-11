import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 3000;

app.use(cors());  
app.use(bodyParser.json());

// My connection string for MongoDB
const mongoURI = 'mongodb+srv://alexxie9667:oiCGMvRPPWiVbCwG@irongripdb.8qmk1ft.mongodb.net/';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

  const workoutSchema = new mongoose.Schema({
    exercises: [
      {
        id: String,
        exerciseName: String,
        previous: String,
        rows: Array
      }
    ],
    duration: Number,
    date: { type: Date, default: Date.now }
  });

const Workout = mongoose.model('Workout', workoutSchema);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/workouts', async (req, res) => {
    try {
        const { exercises, duration } = req.body;
        console.log('Received workout data:', req.body);
        const newWorkout = new Workout({ exercises, duration });
        await newWorkout.save();
        res.status(201).send('Workout data saved successfully');
    } catch (error) {
        console.log('Error saving workout data:', error);
        res.status(500).send('Server error');
    }
});
  

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});