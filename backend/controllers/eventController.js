const Event = require('../models/Event');

const getEvents = async (_req, res) => {
  const events = await Event.find().sort({ date: 1 });
  res.json(events);
};

const createEvent = async (req, res) => {
  const payload = {
    ...req.body,
    poster: req.file ? `/uploads/${req.file.filename}` : ''
  };
  const event = await Event.create(payload);
  res.status(201).json(event);
};

const updateEvent = async (req, res) => {
  const event = await Event.findById(req.params.id);
  if (!event) return res.status(404).json({ message: 'Event not found' });

  const updateData = { ...req.body };
  if (req.file) updateData.poster = `/uploads/${req.file.filename}`;

  const updated = await Event.findByIdAndUpdate(req.params.id, updateData, { new: true });
  res.json(updated);
};

const deleteEvent = async (req, res) => {
  const event = await Event.findByIdAndDelete(req.params.id);
  if (!event) return res.status(404).json({ message: 'Event not found' });
  res.json({ message: 'Event deleted' });
};

module.exports = { getEvents, createEvent, updateEvent, deleteEvent };
