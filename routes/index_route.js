var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('in out');
  res.render('main', { title: 'Express' });
});


module.exports = router;
