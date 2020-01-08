exports.seed = function(knex) {
  return knex('order_items').insert([
    {
      quantity: 25,
      item_id: 1,
      farms_id: 1,
      orders_id: '111',
      users_id: 1
    },
    {
      quantity: 25,
      item_id: 1,
      farms_id: 1,
      orders_id: '111',
      users_id: 1
    },
    {
      quantity: 25,
      item_id: 1,
      farms_id: 2,
      orders_id: '222',
      users_id: 1
    },
    {
      quantity: 25,
      item_id: 1,
      farms_id: 2,
      orders_id: '222',
      users_id: 2
    },
    {
      quantity: 25,
      item_id: 1,
      farms_id: 3,
      orders_id: '333',
      users_id: 2
    },
    {
      quantity: 25,
      item_id: 1,
      farms_id: 3,
      orders_id: '333',
      users_id: 3
    },
    {
      quantity: 25,
      item_id: 1,
      farms_id: 4,
      orders_id: '444',
      users_id: 3
    },
    {
      quantity: 25,
      item_id: 1,
      farms_id: 4,
      orders_id: '555',
      users_id: 4
    },
    {
      quantity: 25,
      item_id: 1,
      farms_id: 5,
      orders_id: '666',
      users_id: 4
    },
  ])
}