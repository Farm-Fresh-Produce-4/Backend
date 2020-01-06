
exports.up = function(knex) {
  return knex.schema
  .createTable('farmers', tbl => {
    tbl.increments();
    tbl
      .string('username', 128)
      .notNullable()
      .unique();
    tbl.string('password', 128).notNullable();
    tbl.string("city", 128).notNullable();
    tbl.string("state", 128).notNullable();
    tbl.integer("zipCode", 5).notNullable();
  })

  .createTable('users', tbl => {
    tbl.increments();
    tbl
      .string('username', 128)
      .unique()
      .notNullable();
    tbl.string('password', 128).notNullable();
    tbl.string("city", 128).notNullable();
    tbl.string("state", 128).notNullable();
    tbl.integer("zipCode", 5).notNullable();
  })

  .createTable('produce', tbl => {
    tbl
      .integer('produce_code', 5)
      .unique()
      .notNullable();
    tbl
      .string('name', 128)
      .unique()
      .notNullable();
    tbl.string('description');
  })

  .createTable('farmers_produce', tbl => {
    tbl.integer('sku').unique();
    tbl
      .integer('farmer_id')
      .references('id')
      .inTable('farmers')
      .notNullable()
      .unsigned()
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('produce_code')
      .references('produce_code')
      .inTable('produce')
      .notNullable();
    tbl
      .integer('quantity')
      .unsigned()
      .notNullable();
    tbl.primary([ 'farmer_id', 'produce_code']);
  })

  .createTable('users_produce', tbl => {
    tbl
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNullable()
      .unsigned()
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('sku')
      .references('sku')
      .inTable('farmers_produce')
      .notNullable()
      .unsigned()
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    tbl
      .integer('quantity')
      .unsigned()
      .notNullable();
    tbl.primary([ 'user_id', 'sku' ]);
  })

  .createTable('orders', tbl => {
    tbl
      .string('id')
      .notNullable()
      .unique()
      .primary();
    tbl.string('address').notNullable();
    tbl.date('order_date').notNullable();
    tbl.boolean('delivered').notNullable();
    tbl
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
  })

  .createTable('city', tbl => {
    tbl.increments();
    tbl.string('name').unique().notNullable();
  })

  .createTable('state', tbl => {
    tbl.increments();
    tbl.string('name').unique().notNullable();
  })

  .createTable('farms', tbl => {
    tbl.increments();
    tbl.string('name').notNullable();
    tbl.string('address').notNullable();
    tbl.integer('year_founded').notNullable();
    tbl.text('bio');
    tbl
      .integer('farmer_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('farmers')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
    tbl
      .integer('city_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('city')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
      tbl
      .integer('state_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('state')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('farms')
    .dropTableIfExists('state')
    .dropTableIfExists('city')
    .dropTableIfExists('orders')
    .dropTableIfExists('users_produce')
    .dropTableIfExists('farmers_produce')
    .dropTableIfExists('produce')
    .dropTableIfExists('users')
    .dropTableIfExists('farmers');
};
