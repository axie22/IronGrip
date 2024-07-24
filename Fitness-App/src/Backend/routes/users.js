const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

module.exports = router;
/*
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

router.get('/:id', (req, res) => {
    res.send(`Get user with id: ${req.params.id}`)
})


router.put('/:id', (req, res) => {
    res.send(`Update user with id: ${req.params.id}`)
})


router.delete('/:id', (req, res) => {
    res.send(`Delete user with id: ${req.params.id}`)
})

export default router
*/