const express = require('express');
const Drone = require('../models/Drone.model');

// require the Drone model here

const router = express.Router();

router.get('/drones/list', (req, res, next) => {
  Drone.find()
  .then(drones=>{
    console.log('Retrieved books from DB:', drones);
          res.render('drones/list', {drones : drones});
  })
  .catch(error => console.log('Error while getting the books from the DB: ', error));
});
  // Iteration #2: List the drones
  // ... your code here

router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form')
});

router.post('/drones/create', (req, res, next) => {
  console.log(req.body)
  Drone.create({name: req.body.name, propellers: req.body.propellers, 
    maxSpeed: req.body.maxSpeed}).then(()=>{
  res.redirect('/drones/list')
});
});

router.get('/drones/:id/edit', (req, res, next) => {
  Drone.findById(req.params.id).then((drone)=>{
  res.render('drones/update-form', drone)
});
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.findByIdAndUpdate(req.params.id, {name: req.body.name, propellers: req.body.propellers, 
    maxSpeed: req.body.maxSpeed}).then(()=>{
  res.redirect('/drones/list') 
});
});


// router.post('/drones/:id/delete', (req, res, next) => {
//   // Iteration #5: Delete the drone
 
// });

module.exports = router;
