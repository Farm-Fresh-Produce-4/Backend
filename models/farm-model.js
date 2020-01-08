const db = require('../data/dbConfig.js');

module.exports = {
  findLocal,
  add,
  find,
  update,
  remove,
  findById
};

function findLocal(cityId, stateId) {
  return db('farms')
    .where({
      city_id: cityId,
      state_id: stateId
    })
    .select('farms.name', 'farms.address', 'farms.year_founded', 'farms.bio', 'farms.id')
}

function find() {
  return db('farms')
}

async function add(farm) {
  const [ newFarm ] = await db('farms')
    .insert(farm)
    .returning('*')

    return newFarm;
}

async function update(farm, id) {
  await db('farms')
    .where({ id: id })
    .update(farm);

    const [ updatedFarms ] = await db('farms')
      .where({ id: id })
      .returning('*');

      return updatedFarms;
}

function remove(id) {
  return db('farms')
    .where({ id: id })
    .delete();
}

function findById(id) {
  return db('farms')
    .where({ id: id })
    .first();
}