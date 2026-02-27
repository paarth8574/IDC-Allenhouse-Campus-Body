const mongoose = require('mongoose');

const galleryImageSchema = new mongoose.Schema(
  {
    caption: { type: String, default: '' },
    imageUrl: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('GalleryImage', galleryImageSchema);
