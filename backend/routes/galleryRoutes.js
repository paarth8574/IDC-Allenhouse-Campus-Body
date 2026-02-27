const express = require('express');
const upload = require('../middleware/uploadMiddleware');
const { protect } = require('../middleware/authMiddleware');
const { getGalleryImages, createGalleryImage, deleteGalleryImage } = require('../controllers/galleryController');

const router = express.Router();

router.get('/', getGalleryImages);
router.post('/', protect, upload.single('image'), createGalleryImage);
router.delete('/:id', protect, deleteGalleryImage);

module.exports = router;
