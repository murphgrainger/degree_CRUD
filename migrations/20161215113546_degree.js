exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', function(table){
    table.increments();
    table.text('name');
    table.text('email').unique().notNullable();
    table.text('password').unique().notNullable();
    table.boolean('is_active');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableifExists('user');
};
