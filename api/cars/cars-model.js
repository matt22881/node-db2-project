const db = require('../../data/db-config.js')

function get() {
    return db('cars')
}

function getById(id) {
    return db('cars').first('*').where({ id })
}

async function create(newCar) {
    const ids = await db('cars').insert(newCar)
    return getById(ids[0])
}

module.exports = {
    get,
    getById,
    create
}
