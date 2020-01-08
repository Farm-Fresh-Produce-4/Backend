const db = require('../data/dbConfig.js');

module.exports = {
  find, 
  findById,
  add,
  findByName
};

function find() {
  return db('produce_category')
}

function findByName(name) {
  return db('produce_category')
    .where({ name: name })
    .first()
}

function findById(id) {
  return db('produce_items')
    .where({ 'produce_items.category_id': id })
    .join('farms', 'farms.id', 'produce_items.farms_id')
    .select(
      'produce_items.id', 
      'produce_items.name', 
      'produce_items.category_id',
      'farms_id',
      'farms_name'
   )
}

async function add(category) {
  let [ newCat ] = await db('produce_category')
    .insert(category)
    .returning('*')

    return newCat;
}