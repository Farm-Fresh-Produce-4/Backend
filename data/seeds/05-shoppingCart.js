exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users_produce').insert([
    { user_id: 1, sku: 30, quantity: 20 },
    { user_id: 2, sku: 40, quantity: 20 },
    { user_id: 3, sku: 50, quantity: 20 },
    { user_id: 4, sku: 60, quantity: 20 }
  ]);
};
