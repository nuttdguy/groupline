const express = require('express');
const router = express.Router();


module.exports = function (app, passport) {

  //==================================================//
  /*                 /AUTH/                   */
  //==================================================//



  //==================================================//
  /*                  /AUTH/SIGNUP                 */
  //==================================================//

  app.get('/auth/signup', function (req, res, next) {
    // TODO :: GET MESSAGE TO DISPLAY IN TEMPLATE
    res.render('signup', {message: req.flash('message')});
  });

  app.post('/auth/signup', function(req, res, next) {
    passport.authenticate('local-signup', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/auth/signup'); }

      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.json({success: 'Registration successful'});
      });
    })(req, res, next);
  });

  //==================================================//
  /*                  /AUTH/LOGIN                 */
  //==================================================//


  app.get('/auth/login', function (req, res, next) {
    // TODO :: GET MESSAGE TO DISPLAY IN TEMPLATE
    res.render('login', {message: req.flash('message')});
  });

  app.post('/auth/login',  function(req, res, next) {
    passport.authenticate('local-login', function(err, user, info) {
        if (err) { return next(err); }
        if (!user) { return res.redirect('/auth/login'); }

        req.logIn(user, function(err) {
          if (err) { return next(err); }
          return res.json({success: 'Login successful'});
        });
      })(req, res, next);
  });


  //==================================================//
  /*                  /AUTH/LOGIN                 */
  //==================================================//


  app.post('/auth/logout', function (req, res, next) {
    req.logOut();
    res.redirect('/');
  });

};

