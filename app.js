var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');

// SET ENVIRONMENT VARIABLE
require('dotenv').config();  // enable the use of .env variables
// PASSPORT INSTANCE TO CONFIGURATION
require('./config/passport')(passport);

// CREATE INSTANCE OF EXPRESS OBJECT
var app = express();


// MIDDLE WARE
// SET VIEW ENGINE
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// CONFIGURE EXPRESS APP

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize passport object for Express
// require('./config/passport')(passport);
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.SECRET_SAUCE })); // Session Secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


// MODULE LOCATION FOR ROUTES
var index = require('./routes/index');
var user = require('./routes/user');
var auth = require('./routes/auth');
var activity = require('./routes/activity');
var explore = require('./routes/explore');


// SET ROUTE URLS
app.use('/', index);
app.use('/user', user);  // TODO :: Complete routes for usr
app.use('/auth', auth);  // TODO :: Complete routes for auth
app.use('/explore', explore);
app.use('/activity', activity); // TODO :: Complete routes for activity



// CATCH 404 AND FORWARD TO ERROR HANDLER
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// HANDLE ERRORS
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// EXPORT THE APP MODULE
module.exports = app;
