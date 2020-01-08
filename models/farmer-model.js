const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findById,
  findByUsername
};

async function add(farmer) {
  const [ newFarmer ] = await db('farmers')
    .insert(farmer)
    .returning('*')

  return newFarmer;
}

function find() {
  return db('farmers').select('id', 'username', 'password');
}

function findById(id) {
  return db('farmers')
    .where({ id: id })
    .first();
}

function findByUsername(username) {
  return db('farmers')
    .where({ username: username })
    .first();
}