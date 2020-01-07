exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  
  return knex('farmers_produce').insert([
    {
      farmer_id: 1,
      produce_code: 11111,
      measurement: 'lb',
      sku: 10,
      quantity: 25,
      price: 30
    },
    {
      farmer_id: 2,
      produce_code: 22222,
      measurement: 'lb',
      sku: 20,
      quantity: 5,
      price: 2
    },
    {
      farmer_id: 3,
      produce_code: 22222,
      measurement: 'lb',
      sku: 30,
      quantity: 50,
      price: 45
    },
    {
      farmer_id: 4,
      produce_code: 33333,
      measurement: 'lb',
      sku: 40,
      quantity: 25,
      price: 30
    },
    {
      farmer_id: 5,
      produce_code: 44444,
      measurement: 'lb',
      sku: 50,
      quantity: 25,
      price: 30
    },
    {
      farmer_id: 3,
      produce_code: 44444,
      measurement: 'lb',
      sku: 60,
      quantity: 25,
      price: 30
    },
    {
      farmer_id: 4,
      produce_code: 55555,
      measurement: 'lb',
      sku: 70,
      quantity: 25,
      price: 30
    },
    {
      farmer_id: 4,
      produce_code: 66666,
      measurement: 'lb',
      sku: 80,
      quantity: 25,
      price: 30
    }
  ]);
};
