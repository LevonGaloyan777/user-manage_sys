const User = require('../models/user_model');
const Photo = require('../models/photo_model');

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
};

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json(user);
};

exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
