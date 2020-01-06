
exports.up = function(knex) {
  return knex.schema.createTable('farmers', tbl => {
    tbl.increments();

    tbl
      .string('username', 128)
      .notNullable()
      .unique();
    tbl.string('password', 128).notNullable();
  })
  .createTable('users', tbl => {
    tbl.increments();
    
    tbl
      .string('username', 128)
      .unique()
      .notNullable();
    tbl.string('password', 128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('farmers');
};
