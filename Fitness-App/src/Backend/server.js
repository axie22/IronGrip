import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import userRouter from './routes/users.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log("Here")
    res.render("index", {text : "Test"})
})

app.use('/users', userRouter);


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });