const db = require('../data/dbConfig.js');

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db('farmers').select('id', 'username', 'password');
}

function findBy(filter) {
  return db('farmers').where(filter);
}

async function add(farmer) {
  const [id] = await db('farmers').insert(farmer);

  return findById(id);
}

function findById(id) {
  return db('farmers')
    .where({ id })
    .first();
}