
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin:'SCBFR7ZA5CC072256', make:'Bentley', model:'Continental', miles:18796, transmission:'Automatic', title:'Salvage'},
        {vin:'KMHHT6KD2DU103105', make:'Hyundai', model:'Genesis', miles:74622, transmission:'Automatic', title:'Clean'},
        {vin:'1NXBR32E85Z556660', make:'Toyota', model:'Corolla', miles:111813},
        {vin:'JH4CU25669C024825', make:'Acura', model:'TSX', miles:69846, transmission:'Manual', title:'clean'}
      ]);
    });
};
