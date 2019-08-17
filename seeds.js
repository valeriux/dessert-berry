const mongoose = require('mongoose')
const Dessert = require('./models/Dessert')

//Connect to the database.
mongoose.connect('mongodb://localhost:27017/dessert-db', (err, db) => {

  //Delete the database (yeah really we are doing that!!!)
  db.dropDatabase()


  //Ad some new data. For us to update data is better if we use only for us.
  Dessert.create([
    {
      name: 'Tiramisu',
      origin: 'Italy',
      description: 'Tiramisu is a classic no-bake Italian dessert combining espresso-dipped ladyfingers and a creamy lightly sweetened mascarpone cream.',
      image: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/06/tiramisu-slice.jpg',
      ingredients: '568ml pot double cream, 250g tub mascarpone, 75ml marsala, 5 tbsp golden caster sugar, 300ml strong coffee, made with 2 tbsp coffee granules and 300ml boiling water, 175g pack sponge finger, 25g chunk dark chocolate, 2 tsp cocoa powder',
      recipe: 'Put a 568ml pot double cream, 250g tub mascarpone, 75ml marsala and 5 tbsp golden caster sugar in a large bowl. Whisk until the cream and mascarpone have completely combined and have the consistency of thickly whipped cream. Pour 300ml strong coffee (made with 2 tbsp coffee granules and 300ml boiling water) into a shallow dish. Dip in a few of the 175g pack of sponge fingers at a time, turning for a few secs until they are nicely soaked, but not soggy. Layer these into your dish until you have used half the sponge fingers, then spread over half of the creamy mixture. Using the coarse side of the grater, grate over most of the 25g dark chocolate. Then repeat the layers (you should use up all the coffee), finishing with the creamy layer. Cover and chill for a few hours or overnight. This can now be kept in the fridge for up to 2 days. To serve, dust with 2 tsp cocoa powder and grate over the remainder of the chocolate. '
    },
    {
      name: 'Dessert2',
      origin: 'Example',
      description: 'Example.',
      image: 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2019/06/tiramisu-slice.jpg',
      ingredients: 'Example',
      recipe: 'Example. '
    }])
    .then(() => mongoose.connection.close()) //Disconnect from the database.
    .catch(err => {
      console.log(err) //Log any errors.
      mongoose.connection.close() //Disconnect from the database.
    })

})
