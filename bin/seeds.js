// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model');
 
const DB_NAME = 'express-drones-dev';
 
mongoose.connect(`mongodb://localhost/${DB_NAME}`, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});





const drone = [
    {
        name: "Bongo",
        propellers: 4,
        maxSpeed: 40
    },
    {
        name: "Guliver",
        propellers: 8,
        maxSpeed: 26
    },
    {
        name: "Tina",
        propellers: 5,
        maxSpeed: 100
    }

];















Drone.create(drone)
.then(dronesFromDB => {
  console.log(`Created ${dronesFromDB.length} drones`);

  // Once created, close the DB connection
  mongoose.connection.close();
})
.catch(err => console.log(`An error occurred while creating books from the DB: ${err}`));