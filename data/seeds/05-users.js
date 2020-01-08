const bcrypt = require('bcryptjs');

exports.seed = function(knex) {

  const password = bcrypt.hashSync('password', 12);
  return knex('users').insert([
    {
      username: 'Ryan',
      password: password,
      city_id: 1,
      state_id: 1
    },
    {
      username: 'Odin',
      password: password,
      city_id: 2,
      state_id: 2
    },
    {
      username: 'Mordecai',
      password: password,
      city_id: 3,
      state_id: 3
    },
    {
      username: 'Hyperion',
      password: password,
      city_id: 4,
      state_id: 4
    },
  ])
}