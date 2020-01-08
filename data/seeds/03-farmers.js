const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('farmers').insert([
    {
      username: 'Farmer Ryan',
      password: bcrypt.hashSync('1234', 12),      
    },
    {
      username: 'Farmer Dave',
      password: bcrypt.hashSync('1234', 12),      
    },
    {
      username: 'Farmer Phil',
      password: bcrypt.hashSync('1234', 12),     
    },
    {
      username: 'Farmer Joe',
      password: bcrypt.hashSync('1234', 12),
    },
    {
      username: 'Farmer Jim',
      password: bcrypt.hashSync('1234', 12),
    },

  ])
}