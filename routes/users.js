var express = require('express');
var router = express.Router();
var db = require('../db/knex');
var queries = require('../db/queries');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  queries.getUser(req.params.id)
  .then(user => {
    console.log(user);
    res.json(user);
  })
});



module.exports = router;
