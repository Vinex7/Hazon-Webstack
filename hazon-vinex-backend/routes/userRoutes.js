const express = require('express');
const User = require('../models/User');
const router = express.Router();

// Create user
router.post('/', async (req, res) => {
    const { name, email, bio, skills } = req.body;
    const newUser = new User({ name, email, bio, skills });
    await newUser.save();
    res.json(newUser);
});

// Get user by ID
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id).populate('projects');
    res.json(user);
});

module.exports = router;

