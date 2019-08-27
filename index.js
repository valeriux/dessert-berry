const express = require('express')
const bodyParser = require('body-parser') //This comes with express. const mongoose = require('mongoose')
const mongoose = require('mongoose')
const routes = require('./config/routes')
const errorHandler = require('./lib/errorHandler')


const app = express()
mongoose.connect('mongodb://localhost:27017/dessert-db')


//This tells Express that the frontend files are in `dist`
app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())
app.use(routes) //Go to the next app.use
app.use(errorHandler)
app.use('/api', routes)

app.listen(4000, () => console.log('Desserts are comming on port 4000'))
