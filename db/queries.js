const knex = require('./knex');

module.exports = {
  getUser: function(id){
    return knex('user').where('id', id).first();
  },
  getDegreeByUser: function(id){
    return knex('degree').where('user_id', id);
  }
}
