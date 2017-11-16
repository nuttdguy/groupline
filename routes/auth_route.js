const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
// const UserProfile = require('../db/models').UserProfile;


// TODO :: determine logical flow or signin, signout, registration
// TODO :: finalize routes - whether route is required


//==================================================//
/*                 /AUTH/                   */
//==================================================//

router.get('/', function(req, res, next) {
    // TODO : add logic for showing signin,register form

    let user = req.user;
    console.log('in /auth/ route', user);
    res.render('auth/index', {title: 'TEST', user: user} );
});


//==================================================//
/*                  /AUTH/SIGNUP                 */
//==================================================//

router.get('/signup', function(req, res, next) {
    // TODO :: create view signup.hbs

    res.render('auth/signup', {} );
});

router.post('/signup', function(req, res, next) {


});


//==================================================//
/*                  /AUTH/LOGIN                 */
//==================================================//


router.get('/login', function(req, res, next) {
    // TODO :: create view login.hbs

    res.render('auth/login', {});
});

router.post('/login', function(req, res, next) {
    // TODO :: authenticate user
    // TODO :: add logic
    // TODO :: res.redirect


});


module.exports = router;