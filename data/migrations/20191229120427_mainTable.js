
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
      .integer('sku', 5)
      .unique()
      .notNullable();
    tbl
      .string('name', 128)
      .unique()
      .notNullable();
    tbl.string('description');
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

  .createTable('city', tbl => {
    tbl.increments();
    tbl.string('name').unique().notNullable();
  })

  .createTable('state', tbl => {
    tbl.increments();
    tbl.string('name').unique().notNullable();
  })

  .createTable('produce', tbl => {
    tbl.increments();
    tbl.string('name').notNullable();
    tbl.integer('quantity').notNullable();
    tbl.float('price').notNullable();
    tbl
      .integer('farm_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('farms')
      .onUpdate('CASCADE')
      .onDelete('RESTRICT');
      
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
  



};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('farmers');
};
