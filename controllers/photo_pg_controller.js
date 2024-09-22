const Photo = require('../models/photo_pg_model');

exports.createImage = async (req, res) => {
  try {
    const photo = await Photo.create(req.body);
    res.status(201).json(photo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getImage = async (req, res) => {
  try {
    const photo = await Photo.findByPk(req.params.id);
    res.status(200).json(photo);
  } catch (error) {
    res.status(404).json({ error: 'Image not found' });
  }
};

exports.updateImage = async (req, res) => {
  try {
    const photo = await Photo.update(req.body, { where: { id: req.params.id } });
    res.status(200).json(photo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    await Photo.destroy({ where: { id: req.params.id } });
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
