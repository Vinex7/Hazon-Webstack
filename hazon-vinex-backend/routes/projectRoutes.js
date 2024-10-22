const express = require('express');
const Project = require('../models/Project');
const User = require('../models/User');
const router = express.Router();

// Create a project
router.post('/', async (req, res) => {
    const { title, description, link, userId } = req.body;
    const project = new Project({ title, description, link, user: userId });
    await project.save();
    
    const user = await User.findById(userId);
    user.projects.push(project);
    await user.save();
    
    res.json(project);
});

module.exports = router;

