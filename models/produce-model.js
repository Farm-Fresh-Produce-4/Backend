const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  // findItemById,
  update,
  remove
};

function find(farmId) {
  return db('produce_items')
    .where ({ farms_id: farmId })
}

async function add(item) {
  const [ added ] = await db('produce_items')
    .insert(item)
    .returning('*')

    return added;
}

async function update(item, id) {
  await db('produce_items')
    .where({ id: id })
    .update(item)

    const [updatedItems] = await db('produce_items')
      .where({ id: id })
      .returning('*')

      return updatedItems;
}

function remove(id) {
  return db('produce_items')
    .where({ id: id})
    .delete()
}

