const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: String,
    description: String,
    link: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Project', ProjectSchema);

