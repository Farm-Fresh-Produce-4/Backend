exports.seed = function(knex) {
  return knex('produce_items').insert([
    {
      name: 'Potatoes',
      quantity: 122,
      price: 4.50,
      category_id: 2,
      farms_id: 1
    },
    {
      name: 'Onions',
      quantity: 122,
      price: 10.00,
      category_id: 1,
      farms_id: 3
    },
    {
      name: 'Carrots',
      quantity: 111,
      price: 12.00,
      category_id: 3,
      farms_id: 4
    },
    {
      name: 'Corn',
      quantity: 123,
      price: 15.00,
      category_id: 1,
      farms_id: 2
    },
    {
      name: 'Lettuce',
      quantity: 123,
      price: 8.40,
      category_id: 2,
      farms_id: 3
    },
    {
      name: 'Cucumber',
      quantity: 122,
      price: 5.60,
      category_id: 2,
      farms_id: 1
    },
  ]);
};