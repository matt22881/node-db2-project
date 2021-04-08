
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments('id')
      tbl.string('vin').unique().notNullable()
      tbl.string('make').notNullable()
      tbl.string('model').notNullable()
      tbl.integer('miles').notNullable()
      tbl.string('transmission')
      tbl.string('title')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars')
};
