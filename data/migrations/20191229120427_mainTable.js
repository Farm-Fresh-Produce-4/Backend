
exports.up = function(knex) {
  return knex.schema.createTable('farmers', farmers => {
    farmers.increments();

    farmers
      .string('username', 128)
      .notNullable()
      .unique();
    farmers.string('password', 128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('farmers');
};
