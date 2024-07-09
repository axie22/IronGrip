import express from 'express';
const router = express.Router();

const app = express();

router.get('/', (req, res) => {
    res.send("Users List")
})

router.get('/new', (req, res) => {
    res.send("Users new form")
})

router
    .route("/:id")
    .get((req, res) => {
        res.send(`Get user with id: ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update user with id: ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with id: ${req.params.id}`)
    })

/* 
router.get('/:id', (req, res) => {
    res.send(`Get user with id: ${req.params.id}`)
})


router.put('/:id', (req, res) => {
    res.send(`Update user with id: ${req.params.id}`)
})


router.delete('/:id', (req, res) => {
    res.send(`Delete user with id: ${req.params.id}`)
})
*/


export default router