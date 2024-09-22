const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  urls: { type: [String], required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
