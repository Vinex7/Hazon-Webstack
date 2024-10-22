const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    bio: String,
    skills: [String],
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
});

module.exports = mongoose.model('User', UserSchema);

