var express = require('express');
var router = express.Router();

var mysql      = require('mysql');

const config = require('../config ');
console.log(config); 
var connection = mysql.createConnection(config);

connection.connect();

console.log("I connected!!!")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
