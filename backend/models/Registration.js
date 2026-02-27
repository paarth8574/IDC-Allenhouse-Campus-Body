const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    course: { type: String, required: true, trim: true },
    year: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    interests: { type: String, required: true, trim: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Registration', registrationSchema);
