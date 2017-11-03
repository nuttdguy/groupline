const express = require('express');
const router = express.Router();


// TODO :: determine logical flow or signin, signout, registration
// TODO :: finalize routes - whether route is required


//==================================================//
/*                 /AUTH/                   */
//==================================================//

router.get('/', function(req, res, next) {
    // TODO : add logic for showing signin,register form

    res.render('auth/index', {} );
});


//==================================================//
/*                  /AUTH/SIGNUP                 */
//==================================================//

router.get('/signup', function(req, res, next) {
    // TODO :: create view signup.hbs

    res.render('auth/signup');
});

router.post('/signup', function(req, res, next) {
    // TODO :: Persist new user to DB

    // TODO :: res.redirect
});


//==================================================//
/*                  /AUTH/LOGIN                 */
//==================================================//


router.get('/login', function(req, res, next) {
    // TODO :: create view login.hbs

    res.render('auth/login');
});

router.post('/login', function(req, res, next) {
    // TODO :: authenticate user
    // TODO :: add logic
    // TODO :: res.redirect
});


module.exports = router;