const express = require('express');
const router = express.Router();


module.exports = function (app, passport) {

  //==================================================//
    /*                 /AUTH/                   */
  //==================================================//

  app.get('/auth', function (req, res, next) {
    res.render('auth_index', {title: 'TEST', user: user});
  });


  //==================================================//
    /*                  /AUTH/SIGNUP                 */
  //==================================================//

  app.get('/auth/signup', function (req, res, next) {
    res.render('signup', {});
  });

  app.post('/auth/signup', passport.authenticate('local-signup', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/auth/signup', // redirect back to the signup page if there is an error
  }));


  //==================================================//
    /*                  /AUTH/LOGIN                 */
  //==================================================//


  app.get('/auth/login', function (req, res, next) {
    res.render('login', {});
  });


  app.post('/auth/login', passport.authenticate('local-login', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/auth/login', // redirect back to the login page if there is an error
  }));

};

