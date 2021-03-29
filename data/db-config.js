const knex = require('knex')

const knexConfig = require('./../knexfile.js')

const activeConfig = "development";
const configuredKnex = knex(knexConfig[activeConfig]);

module.exports = configuredKnex;