const GalleryImage = require('../models/GalleryImage');

const getGalleryImages = async (_req, res) => {
  const images = await GalleryImage.find().sort({ createdAt: -1 });
  res.json(images);
};

const createGalleryImage = async (req, res) => {
  if (!req.file) return res.status(400).json({ message: 'Image is required' });

  const image = await GalleryImage.create({
    caption: req.body.caption || '',
    imageUrl: `/uploads/${req.file.filename}`
  });

  res.status(201).json(image);
};

const deleteGalleryImage = async (req, res) => {
  const image = await GalleryImage.findByIdAndDelete(req.params.id);
  if (!image) return res.status(404).json({ message: 'Image not found' });
  res.json({ message: 'Image deleted' });
};

module.exports = { getGalleryImages, createGalleryImage, deleteGalleryImage };
