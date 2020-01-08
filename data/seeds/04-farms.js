exports.seed = function(knex) {
  return knex('farms').insert([
    {
      name: 'R.R Farms',
      address: '123 Carlsbad Way',
      year_founded: '1803',
      bio: 'This is a really old farm.',
      farmer_id: 1,
      city_id: 1,
      state_id: 1
    },
    {
      name: 'Anza Farms',
      address: '123 Anza Way',
      year_founded: '1934',
      bio: 'Only the best farm.',
      farmer_id: 2,
      city_id: 2,
      state_id: 2
    },
    {
      name: 'Fred and Ted Farms',
      address: '123 Escondido Way',
      year_founded: '1976',
      bio: 'The best farm in Southern California',
      farmer_id: 3,
      city_id: 3,
      state_id: 3
    },
    {
      name: 'Harpold Farms',
      address: '123 Santa Monica Way',
      year_founded: '1966',
      bio: 'The most beautiful farm in the world',
      farmer_id: 4,
      city_id: 4,
      state_id: 4
    },
    {
      name: 'Allfather Farms',
      address: '123 Asgard Dr',
      year_founded: '1453',
      bio: 'Best in the galaxy',
      farmer_id: 5,
      city_id: 5,
      state_id: 5
    },
  ])
}