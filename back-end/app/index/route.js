var express = require('express');
var router = express.Router();

const indexController = require("./controller");

/* GET home page. */
router.get('/', indexController);

module.exports = router;