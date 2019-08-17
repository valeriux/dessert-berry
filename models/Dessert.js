const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')


const dessertSchema = new mongoose.Schema({
  name: {type: String, required: true, unique: true},
  origin: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, required: true},
  ingredients: { type: String, required: true},
  recipe: { type: String, required: true}

})


dessertSchema.plugin(uniqueValidator) //This makes the unique error nicer.


module.exports = mongoose.model('Dessert', dessertSchema)
