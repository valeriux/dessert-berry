//Import the relevant model
const Dessert = require('../models/Dessert')

function indexRoute(req, res, next) {
  //Get all the characters from the database.
  Dessert.find()
    .then(dessert => res.json(dessert)) //Send them as JSON.
    .catch(next) //Handler our errors.
}

function showRoute(req, res, next){
  //Get a specific characters.
  Dessert.findById(req.params.id)
    .then(dessert => res.json(dessert)) //Set it as JSON.
    .catch(next) //Handler our errors.
}

module.exports = {
  index: indexRoute,
  show: showRoute
}
