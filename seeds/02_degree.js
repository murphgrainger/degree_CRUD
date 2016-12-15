exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex.raw('DELETE FROM degree; ALTER SEQUENCE degree_id_seq RESTART WITH 1;')
        .then(function() {
            const degree = [{
                name: 'Bachelor of Science',
                institution: 'University of Richmond',
                gpa: 5,
                user_id: 1
            }, {
                name: 'Bachelor of Arts',
                institution: 'University of Maryland',
                gpa: 2,
                user_id: 1
            }, {
                name: 'Bachelor of Arts',
                institution: 'University of Richmond',
                gpa: 2,
                user_id: 2
            }, {
                name: 'Bachelor of Science',
                institution: 'Miami of Ohio',
                gpa: 9,
                user_id: 2
            }];
            return knex('degree').insert(degree);
        });
};
