const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    date: { type: Date, required: true },
    description: { type: String, required: true, trim: true },
    registrationLink: { type: String, default: '#' },
    poster: { type: String, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
