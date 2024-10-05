import express from 'express';
import User from '../models/User';
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken'; 

const router = express.Router();

// route to get a list of users (testing)
router.get('/', (req, res) => {
    res.send("Users List");
});

// Register new user
router.post('/register', async (req, res) => {
    const { email, username, password } = req.body;

    try {
        // check if user with this email already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // create a new user
        user = new User({ email, username, password });
        await user.save();
        //create JWT token for the newly registered user
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// Login route
router.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // find the user by email
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid credentials' });
        // check if passwords match
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Server error' });
    }
});

// route to get, update, or delete a specific user
router
    .route("/:id")
    .get(async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json(user);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ message: 'Server error' });
        }
    })
    .put(async (req, res) => {
        try {
            const { email, username, password } = req.body;
            const updatedUser = await User.findByIdAndUpdate(req.params.id, { email, username, password }, { new: true });
            if (!updatedUser) return res.status(404).json({ message: 'User not found' });
            res.json(updatedUser);
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ message: 'Server error' });
        }
    })
    .delete(async (req, res) => {
        try {
            const user = await User.findByIdAndDelete(req.params.id);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.json({ message: 'User deleted successfully' });
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ message: 'Server error' });
        }
    });

export default router;
