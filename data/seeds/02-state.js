
exports.seed = function(knex) {
  return knex('state').insert([
    {name: 'California'},
    {name: 'Utah'},
    {name: 'Alaska'},
    {name: 'Colorado'},
    {name: 'North Carolina'}
  ]);
};