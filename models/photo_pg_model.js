const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://user:post777@localhost:5432/userdb', {
  logging: console.log, 
});

const Photo = sequelize.define('Photo', {
  urls: { 
    type: DataTypes.ARRAY(DataTypes.STRING), 
    allowNull: false 
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id',
    },
  },
}, {
  tableName: 'Photos',
  timestamps: true,
});

module.exports = Photo;


sequelize.sync()
  .then(() => {
    console.log('Database & tables created!');
  });