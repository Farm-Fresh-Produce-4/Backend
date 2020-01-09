exports.seed = function(knex) {
  return knex('orders').insert([
    {
      id: '111',
      address: '123 Palisades Rd.',
      order_date: '01-01-2019',
      delivered: 0,
      user_id: 1
    },
    {
      id: '222',
      address: '123 Palm Valley',
      order_date: '01-02-2019',
      delivered: 1,
      user_id: 2
    },
    {
      id: '333',
      address: '123 Palm Ave.',
      order_date: '01-04-2019',
      delivered: 1,
      user_id: 3
    },
    {
      id: '444',
      address: '123 Venice Blvd.',
      order_date: '01-06-2019',
      delivered: 0,
      user_id: 4
    },
    {
      id: '555',
      address: '456 Santa Monica Blvd',
      order_date: '01-08-2019',
      delivered: 0,
      user_id: 1
    },
    {
      id: '666',
      address: '187 Overlook Dr.',
      order_date: '01-10-2019',
      delivered: 0,
      user_id: 2
    },
  ])
}
