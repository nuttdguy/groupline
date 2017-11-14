const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcrypt');
const UserProfile = require('../db/models').UserProfile;


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
    // Persist new user to DB
    // res.redirect
    let newUser = new UserProfile(req.body);

    UserProfile.find({
        where: {username: newUser.username}}, function(user) {
            console.log(user);
        return user;
    }).then( function(user) {

        let hash = bcrypt.hashSync(newUser.password, bcrypt.genSaltSync(8), null);
        newUser.password = hash;

        newUser.save().then(err => {
            res.redirect('/auth/login');
        })
    })

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
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/auth/login'
    }, function(err, user, info) {
        if (err) {
            return res.render('/auth/login');
        }

        return req.logIn(user, function(err) {
            if (err) {
                res.redirect('/auth/')
            }
            return res.redirect('/')
        })
    })

});


module.exports = router;