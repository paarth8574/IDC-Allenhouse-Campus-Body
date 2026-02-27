const TeamMember = require('../models/TeamMember');

const getTeamMembers = async (_req, res) => {
  const members = await TeamMember.find().sort({ createdAt: 1 });
  res.json(members);
};

const createTeamMember = async (req, res) => {
  const payload = {
    ...req.body,
    photo: req.file ? `/uploads/${req.file.filename}` : ''
  };
  const member = await TeamMember.create(payload);
  res.status(201).json(member);
};

const updateTeamMember = async (req, res) => {
  const member = await TeamMember.findById(req.params.id);
  if (!member) return res.status(404).json({ message: 'Team member not found' });

  const updateData = { ...req.body };
  if (req.file) updateData.photo = `/uploads/${req.file.filename}`;

  const updated = await TeamMember.findByIdAndUpdate(req.params.id, updateData, { new: true });
  res.json(updated);
};

const deleteTeamMember = async (req, res) => {
  const member = await TeamMember.findByIdAndDelete(req.params.id);
  if (!member) return res.status(404).json({ message: 'Team member not found' });
  res.json({ message: 'Team member deleted' });
};

module.exports = { getTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember };
