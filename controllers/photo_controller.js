const Photo = require('../models/photo_model'); 


exports.createImage = async (req, res) => {
  try {
    const photo = new Photo(req.body); 
    await photo.save(); 
    res.status(201).json(photo); 
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
};


exports.getImage = async (req, res) => {
  try {
    const photo = await Photo.findById(req.params.id); 
    if (!photo) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.status(200).json(photo); 
  } catch (error) {
    res.status(404).json({ error: 'Image not found' }); 
  }
};


exports.updateImage = async (req, res) => {
  try {
    const photo = await Photo.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
    if (!photo) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.status(200).json(photo); 
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const photo = await Photo.findByIdAndDelete(req.params.id); 
    if (!photo) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.status(204).send(); 
  } catch (error) {
    res.status(400).json({ error: error.message }); 
  }
};
