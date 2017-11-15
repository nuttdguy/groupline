const config = require('./config');
const LocalStrategy = require('passport-local').Strategy;
// const User = require('../db/models/userprofile');
const bcrypt = require('bcrypt');

module.exports = (passport) => {

  // passport.serializeUser((user, done) => {
  //   done(null, user.id);
  // });
  //
  // passport.deserializeUser(function (id, done) {
  //
  //   User.findOne({where: {userProfileId: id}})
  //     .then(function (err, user) {
  //       done(err, user);
  //     });
  // });
  //
  // passport.use(new LocalStrategy(function (username, password, done) {
  //
  //   new User({username: username}).fetch().then(function (data) {
  //     var user = data;
  //     if (user === null) {
  //       return done(null, false, {message: 'Invalid username or password'});
  //     } else {
  //       user = data.toJSON();
  //       if (!bcrypt.compareSync(password, user.password)) {
  //         return done(null, false, {message: 'Invalid password'});
  //       } else {
  //         return done(null, user);
  //       }
  //     }
  //   })
  // }))

};