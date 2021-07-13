exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable('Cars', table => {
    table.increments('id')

    table.text('vin', 17)
      .notNullable()
      .unique()

    table.text('make', 100)
      .notNullable()

    table.text('model', 100)
      .notNullable()

    table.integer('mileage').unsigned()
      .notNullable()

    table.text('title', 100)

    table.text('transmission')
  })
};

exports.down = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.dropTableIfExists('Cars')
};
