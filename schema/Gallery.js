// ./models/Story.js
const mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    name: String,
    url: String,
    team: String,
    created_at: Date,
    image_id: String,
    id: mongoose.Schema.ObjectId
})