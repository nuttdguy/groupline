var express = require('express');
var router = express.Router();

module.exports = (app) => {

  /* GET home page. */
  app.get('/', (req, res, next) => {
    console.log('IN INDEX_ROUTE AND MAIN.PUG');
    console.log(req.user);
    res.render('main', {title: 'Express', user: req.user});
  });

};


