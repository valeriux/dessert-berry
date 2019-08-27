const express = require('express')
const bodyParser = require('body-parser') //This comes with express. const mongoose = require('mongoose')
const mongoose = require('mongoose')
const routes = require('./config/routes')
const errorHandler = require('./lib/errorHandler')
const { port, dbUri } = require('./config/environment')

const app = express()
mongoose.connect(dbUri)

//This tells Express that the frontend files are in `dist`
app.use(express.static(`${__dirname}/dist`))

app.use(bodyParser.json())
app.use(routes) //Go to the next app.use
app.use(errorHandler)
app.use('/api', routes)

app.listen(port, () => console.log(`Desserts are coming on port ${port}`))
