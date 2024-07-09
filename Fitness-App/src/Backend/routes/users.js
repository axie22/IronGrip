import express from 'express';
const router = express.Router();

const app = express();

router.get('/', (req, res) => {
    res.send("Users List")
})

router.get('/new', (req, res) => {
    res.send("Users new form")
})

export default router