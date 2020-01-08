
exports.seed = function(knex) {
  return knex('city').insert([
    {name: 'Escondido'},
    {name: 'San Diego'},
    {name: 'Carlsbad'},
    {name: 'Anza'},
    {name: 'San Marcos'},
    {name: 'Poway'}
  ]);
};