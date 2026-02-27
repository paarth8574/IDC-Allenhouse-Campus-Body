const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const { protect } = require('../middleware/authMiddleware');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');

const router = express.Router();

router.get('/', getEvents);
router.post('/', protect, upload.single('poster'), createEvent);
router.put('/:id', protect, upload.single('poster'), updateEvent);
router.delete('/:id', protect, deleteEvent);

module.exports = router;
