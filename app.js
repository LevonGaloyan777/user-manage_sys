                     // With Mongo


const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user_m_routes');
const photoRoutes = require('./routes/photo_m_routes');


const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/userdb',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));


app.use('/api', userRoutes);
app.use('/api', photoRoutes);


app.listen(3000, () => console.log('Server is running on port 3000'));


                                    //     With Postgre 


// const express = require('express');
// const bodyParser = require('body-parser');
// const userPgRoutes = require('./routes/user_pg_routes');
// const photoPgRoutes = require('./routes/photo_pg_routes')
// const { Sequelize } = require('sequelize');


// const app = express();
// app.use(bodyParser.json());


// const sequelize = new Sequelize('postgres://user:post777@localhost:5432/userdb');


// sequelize.sync()
//   .then(() => {
//     console.log('PostgreSQL connected and models synced');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to PostgreSQL or sync models:', err);
//   });

// app.use('/api', userPgRoutes);
// app.use('/api', photoPgRoutes);

// app.listen(3000, () => console.log('Server is running on port 3000'));

