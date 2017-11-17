var express = require('express');
var router = express.Router();

module.exports = (app) => {

  /* GET home page. */
  app.get('/', (req, res, next) => {
    console.log('in out');
    res.render('main', {title: 'Express'});
  });

};


