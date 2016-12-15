exports.up = function(knex, Promise) {
  return knex.schema.createTable('degree', function(table){
    table.increments();
    table.text('name').notNullable();
    table.text('institution').notNullable();
    table.integer('gpa');
    table.integer('user_id').references('user.id').unsigned().onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('degree');
};
