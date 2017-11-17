const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


module.exports = function (app, passport) {

  //==================================================//
    /*                 /AUTH/                   */
  //==================================================//

  app.get('/auth', function (req, res, next) {
    // TODO : add logic for showing signin,register form

    let user = req.user;
    console.log('in /auth/ route', user);
    res.render('auth_index', {title: 'TEST', user: user});
  });


  //==================================================//
    /*                  /AUTH/SIGNUP                 */
  //==================================================//

  app.get('/auth/signup', function (req, res, next) {
    // TODO :: create view signup.hbs

    res.render('signup', {});
  });

  // app.post('/auth/signup', function (req, res, next) {
  //   console.log('SIGNUP POST')
  // });

  app.post('/auth/signup', passport.authenticate('local-signup', {
    successRedirect: '/', // redirect to the secure profile section
    failureRedirect: '/', // redirect back to the signup page if there is an error
  }));


  //==================================================//
    /*                  /AUTH/LOGIN                 */
  //==================================================//


  app.get('/auth/login', function (req, res, next) {
    // TODO :: create view login.hbs

    res.render('login', {});
  });


  app.post('/auth/login', function (req, res, next) {
    console.log('LOGIN POST')
  });

  // app.post('/auth/login', passport.authenticate('local-login', {
  //   successRedirect: '/', // redirect to the secure profile section
  //   failureRedirect: '/auth/signup', // redirect back to the signup page if there is an error
  // }));

  function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
      return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
  }

};

// module.exports = router;