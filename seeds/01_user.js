
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('delete from "user"; ALTER SEQUENCE user_id_seq RESTART with 3;')
    .then(function () {
      const user = [{
        id: 1,
        name: 'Murph',
        email: 'murph@info.com',
        password: 'horse123',
        is_active: true
      }, {
        id: 2,
        name: 'Andrew',
        email: 'abiv23@info.com',
        password: 'penguin23',
        is_active: true
      }];
      return knex('user').insert(user);
    });
};
