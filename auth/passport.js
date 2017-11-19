var LocalStrategy = require('passport-local').Strategy;  // load all the things we need
var User = require('../db/models/index').UserProfile; // load up the user model

// expose this function to our app using module.exports
module.exports = function (passport) {

  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session
  // used to serialize the user for the session

  // USED TO DESERIALIZE USER -> ID MUST MATCH MODEL PK
  passport.deserializeUser(function (userProfileId, done) {
    console.log('DESERIALIZE USER ========== ');
    User.findById(userProfileId).then((user) => {
      done(null, user);
    });
  });


  passport.serializeUser(function (user, done) {
    console.log('SERIALIZE USER ========== ');
    done(null, user.userProfileId);
  });


  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-signup', new LocalStrategy({
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true, // allows us to pass back the entire request to the callback
    },
    function (req, username, password, done) {
      // asynchronous
      // User.findOne wont fire unless data is sent back
      console.log(req.body.username);
      console.log(req.body.password);
      // console.log(username, password);
      username = req.body.username;
      password = req.body.password;

      process.nextTick(function () {

        if (username === '' || password === '') {
          done(null, false, {fail: 'You can\'t leave username or password empty'});
        }

        // find a user whose username is the same as the forms username
        // we are checking to see if the user trying to login already exists
        User.find({
          where: {username: username}
        }).then((user) => {

          // check to see if theres already a user with that username
          if (user) {
            done(null, false, {fail: 'That username is already taken.'});
          } else {

            // if there is no user with that username
            // create the user

            User.create({username: username}).then((newUser) => {
              console.log(newUser);
              newUser.password = newUser.generateHash(password);

              newUser.save({}).then(() => {
                done(null, newUser, {success: 'Your account was created.'});
              });
            });

          }

        });

      });

    }));

  // =========================================================================
  // LOCAL LOGIN =============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-login', new LocalStrategy({
      // by default, local strategy uses username and password, we will override with email
      usernameField: 'username',
      passwordField: 'password',
      passReqToCallback: true, // allows us to pass back the entire request to the callback
    },
    function (req, username, password, done) { // callback with username and password from our form
      // find a user whose username is the same as the forms username
      // we are checking to see if the user trying to login already exists
      username = req.body.username;
      password = req.body.password;

      if (username === '' || password === '') {
        return done(null, false, {fail: 'You have to enter a username and/or password'});
      } // req.flash is the way to set flashdata using connect-flash

      // console.log('THIS IS IN PASSPORT.JS LOGGING IN');
      User.find({
        where: {username: username}
      }).then(user => {
        console.log('THIS IS IN PASSPORT.JS FOUND USER');
        // console.log(user);
        // if there are any errors, return the error before anything else
        // if no user is found, return the message
        if (!user) {
          console.log('IN NOT USER FOUND');
          return done(null, false, {fail: 'Oops, no user found.'});
        } // req.flash is the way to set flashdata using connect-flash

        if (user === null || user === undefined) {
          return done(null, false, {fail: 'Oops, no user found.'});
        } // req.flash is the way to set flashdata using connect-flash

        // if the user is found but the password is wrong
        if (!user.validatePassword(password)) {
          console.log('IN VALIDATE PASSWORD ERROR');
          return done(null, false, {fail: 'Oops! Wrong password or username.'});
          // create the loginMessage and save it to session as flashdata
        }
        console.log('IS SUCCESSFUL, FOUND USER');
        done(null, user); // RETURN SUCCESSFUL USER
      });

    }));

};
