const User = require('../models/user_pg_model');

exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
};

exports.getUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  res.status(200).json(user);
};

exports.updateUser = async (req, res) => {
  const user = await User.update(req.body, { where: { id: req.params.id } });
  res.status(200).json(user);
};

exports.deleteUser = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } });
  res.status(204).send();
};

exports.getAllUsers = async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
};
