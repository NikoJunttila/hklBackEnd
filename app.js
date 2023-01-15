const config = require('./utils/config')
const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const usersRouter = require('./controllers/users')
const loginRouter = require("./controllers/login")
const eventsRouter = require("./controllers/events")
const galleriaRouter = require("./controllers/galleria")
const productRouter = require("./controllers/products")
const palautesRouter = require("./controllers/palaute")
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')



 //Data imports
/*
const KauppaData = require("./data/kauppa")
const Product = require('./models/Product')

Product.insertMany(KauppaData)
*/


logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)
app.use(middleware.tokenExtractor)

app.use('/api/users', usersRouter)
app.use("/api/login", loginRouter)
app.use("/api/galleria", galleriaRouter)
app.use("/api/products", productRouter)
app.use("/api/events", eventsRouter)
app.use("/api/palaute", palautesRouter)



app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app