const Registration = require('../models/Registration');

const createRegistration = async (req, res) => {
  const registration = await Registration.create(req.body);
  res.status(201).json({ message: 'Registration submitted', registration });
};

const getRegistrations = async (_req, res) => {
  const registrations = await Registration.find().sort({ createdAt: -1 });
  res.json(registrations);
};

module.exports = { createRegistration, getRegistrations };
