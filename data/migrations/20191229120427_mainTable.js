
exports.up = function(knex) {
  return knex.schema
    .createTable('city', tbl => {
      tbl.increments();
      tbl.string('name').unique().notNullable();
    })

    .createTable('state', tbl => {
      tbl.increments();
      tbl.string('name').unique().notNullable();
    })

    .createTable('farmers', tbl => {
      tbl.increments();
      tbl
        .string('username', 128)
        .notNullable()
        .unique();
      tbl.string('password', 128).notNullable();
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
        .onDelete('CASCADE');
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

    .createTable('users', tbl => {
      tbl.increments();
      tbl
        .string('username', 128)
        .unique()
        .notNullable();
      tbl.string('password', 128).notNullable();
      tbl
        .integer('city_id')
        .references('id')
        .inTable('city')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
      .integer('state_id')
      .references('id')
      .inTable('state')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    })

    .createTable('produce_category', tbl => {
      tbl.increments();
      tbl.string('name');
    })

    .createTable('produce_items', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.integer('quantity').notNullable();
      tbl.float('price').notNullable();
      tbl
        .integer('category_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('produce_category')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('farms_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('farms')
        .onUpdate('CASCADE')
        .onDelete('CASCADE'); 
  })

    .createTable('orders', tbl => {
      tbl
        .integer('id')
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
        .onDelete('CASCADE');
    })

    .createTable('order_items', tbl => {
      tbl.increments();
      tbl.integer('quantity').notNullable();
      tbl
        .integer('item_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('produce_items')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('farms_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('farms')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('orders_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('orders')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('users_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('order_items')
    .dropTableIfExists('orders')
    .dropTableIfExists('produce_items')
    .dropTableIfExists('produce_category')
    .dropTableIfExists('users')
    .dropTableIfExists('farms')
    .dropTableIfExists('farmers')
    .dropTableIfExists('state')
    .dropTableIfExists('city');
};
