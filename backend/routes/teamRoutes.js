const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const { protect } = require('../middleware/authMiddleware');
const { getTeamMembers, createTeamMember, updateTeamMember, deleteTeamMember } = require('../controllers/teamController');

const router = express.Router();

router.get('/', getTeamMembers);
router.post('/', protect, upload.single('photo'), createTeamMember);
router.put('/:id', protect, upload.single('photo'), updateTeamMember);
router.delete('/:id', protect, deleteTeamMember);

module.exports = router;
