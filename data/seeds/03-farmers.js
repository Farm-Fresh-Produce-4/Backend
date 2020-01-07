const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex('farmers').insert([
    {
      username: 'Farmer Ryan',
      password: bcrypt.hashSync('1234', 12),
      city: 'Rancho Sante Fe',
      state: 'California',
      zipCode: 92127,
    },
    {
      username: 'Farmer Dave',
      password: bcrypt.hashSync('1234', 12),
      city: 'Escondido',
      state: 'California',
      zipCode: 92025,
    },
    {
      username: 'Farmer Phil',
      password: bcrypt.hashSync('1234', 12),
      city: 'Anza',
      state: 'California',
      zipCode: 92539,
    },
    {
      username: 'Farmer Joe',
      password: bcrypt.hashSync('1234', 12),
      city: 'Idyllwild',
      state: 'California',
      zipCode: 92549,
    },
    {
      username: 'Farmer Jim',
      password: bcrypt.hashSync('1234', 12),
      city: 'Arcadia Oaks',
      state: 'California',
      zipCode: 92075,
    },

  ])
}