import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import workoutRoutes from './routes/workouts.js';

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'mongodb+srv://alexxie9667:oiCGMvRPPWiVbCwG@irongripdb.8qmk1ft.mongodb.net/';
mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));


app.use(workoutRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
