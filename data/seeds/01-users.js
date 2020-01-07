const bcrypt = require('bcryptjs');
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    {
      username: 'Ryan',
      password: bcrypt.hashSync('pizza', 10),
      city: 'Carlsbad',
      state: 'California',
      zipCode: '92008',
    },
    {
      username: 'Odin',
      password: bcrypt.hashSync('pizza', 10),
      city: 'Newport Beach',
      state: 'California',
      zipCode: '92660',
    },
    {
      username: 'Mordecai',
      password: bcrypt.hashSync('pizza', 10),
      city: 'Laguna Beach',
      state: 'California',
      zipCode: '92651',
    },
    {
      username: 'Hyperion',
      password: bcrypt.hashSync('pizza', 10),
      city: 'Malibu',
      state: 'California',
      zipCode: '90265',
    },
  ])
}