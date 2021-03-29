const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const carsRouter = require('./cars/cars-router.js')

const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/cars', carsRouter)

module.exports = server
