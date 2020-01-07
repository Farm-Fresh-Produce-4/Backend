exports.seed = function(knex, Promise) {
  return knex('produce').insert([
    {
      name: 'Potatoes',
      description: 'The best potatoes on earth',
      produce_code: 11111,
    },
    {
      name: 'Onions',
      description: 'They will make you cry, but it will be a good cry',
      produce_code: 22222,
    },
    {
      name: 'Carrots',
      description: 'The most delicious orange sticks you will ever have',
      produce_code: 33333,
    },
    {
      name: 'Corn',
      description: 'Tastes best when made into popcorn and served with candy',
      produce_code: 44444,
    },
    {
      name: 'Lettuce',
      description: 'Green leafy things. Great on tacos',
      produce_code: 55555,
    },
    {
      name: 'Cucumber',
      description: 'Great on salad',
      produce_code: 66666,
    },
  ])
}