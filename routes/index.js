var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  console.log('in out');
  res.render('index', { title: 'Express' });
});

// router.get('/explore', function(req, res, next) {
//   res.render('explore', { title: 'Explore' });
// });

module.exports = router;
