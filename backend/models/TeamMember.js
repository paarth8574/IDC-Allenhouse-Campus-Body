const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    linkedin: { type: String, default: '' },
    github: { type: String, default: '' },
    photo: { type: String, default: '' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('TeamMember', teamMemberSchema);
