const ExpressError = require('../ExpressError.js')
const Cars = require('./cars-model.js')

const express = require('express')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        const cars = await Cars.get()
        res.status(200).json(cars)
    } catch (err) {
        next(new ExpressError("error getting cars: " + err.message, 500))
    }
})
  
router.get('/:id', validateId, async (req, res, next) => {
    try {
        res.status(200).json(req.fruit)
    } catch (err) {
         next(new ExpressError('error getting by id: ' + err.message, 500))
    }
})
  
router.post('/', validateBody, async (req, res, next) => {
    try {
        const newCar = await Cars.create(req.body)
        res.status(201).json(newCar)
    } catch (err) {
        next(new ExpressError('error creating car entry: ' + err.message, 500))
    }
})



async function validateId(req, res, next) {
    try {
        const car = await Cars.getById(req?.params?.id)
  
        if (car) {
            req.car = car
            next()
        } else {
            next(new ExpressError('id not found', 404))
        }
        } catch (err) {
            next(new ExpressError('body validation error: ' + err.message, 500))
        }  
}
  
async function validateBody(req, res, next) {
    const body = req.body
    if (body.vin && body.make && body.model && body.miles) {
        next()
    } else {
        next(new ExpressError('VIN, make, model and mileage is required', 400))
    }
}
  
module.exports = router