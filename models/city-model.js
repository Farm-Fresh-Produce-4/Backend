const db = require('../data/dbConfig.js');

module.exports = {
  find, 
  findById,
  add,
  findByName,
  findProduceItems,
};

function find() {
  return db('city');
}

function findById(id) {
  return db('city')
    .where({ id: id })
    .first();
}

function add(city) {
  return db('city')
    .insert(city)
    .then( ([id]) => findById(id))
    .catch(err => err)
}

function findByName(name) {
  return db('city')
    .where({ name: name })
    .first();
}

function findProduceItems(id) {
  return db('city')
    .where({ 'city.id': id })
    .join('farms', 'farms.city_id', 'city.id')
    .join('produce_items', 'produce_items.farms_id', 'farms.id')
    .join('produce_category', 'produce_category.id', 'produce_items.category_id')
    .select(
      'city.id as city_id', 
      'city.name as city_name', 
      'produce_items.id as produce_id', 
      'produce_items.name as produce_name', 
      'produce_items.quantity', 
      'produce_items.price as unit_cost', 
      'produce_category.name as produce_category', 
      'farms.name as seller')
  }