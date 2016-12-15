var express = require('express');
var router = express.Router();
var db = require('../db/knex');
var queries = require('../db/queries');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    if (!isNaN(req.params.id)) {
        queries.getUser(req.params.id)
            .then(user => {
                if (user) {
                    delete user.password;
                    res.json(user);
                } else {
                    resError(res, 404, 'User does not exist!');
                }
            });
    } else {
        resError(res, 500, 'Use a valid ID!');
    }

});

function resError(res, statusCode, message) {
    res.status(statusCode);
    res.json({
        message
    });
}



module.exports = router;
