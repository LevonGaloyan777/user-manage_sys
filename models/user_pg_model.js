const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://user:post777@localhost:5432/userdb');

const User = sequelize.define('User', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false },
  phone: { type: DataTypes.STRING },
  address: { type: DataTypes.TEXT },
  age: { type: DataTypes.INTEGER },
});


module.exports = User;

sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  });