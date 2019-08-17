const express = require('express')

const bodyParser = require('body-parser') //This comes with express. const mongoose = require('mongoose')
const mongoose = require('mongoose')
const routes = require('./config/routes')


const app = express()
mongoose.connect('mongodb://localhost:27017/dessert-db')


app.use(bodyParser.json())
app.use(routes) //Go to the next app.use

app.listen(4000, () => console.log('Desserts are comming on port 4000'))
