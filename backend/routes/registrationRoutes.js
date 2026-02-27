const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { createRegistration, getRegistrations } = require('../controllers/registrationController');

const router = express.Router();

router.post('/', createRegistration);
router.get('/', protect, getRegistrations);

module.exports = router;
