const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const flash = require('connect-flash');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const passport = require('passport');
const session = require('express-session');
const formidable = require('express-formidable');
const app = express(); // CREATE INSTANCE OF EXPRESS OBJECT

// MIDDLE WARE
require('dotenv').config();  // ENABLE USE OF .ENV HIDDEN FILE FOR SECRETS
app.locals.moment = require('moment');
// app.use(formidable());

// SET VIEW DIRECTORIES
app.set('views', [
  path.join(__dirname, 'views/'),
  path.join(__dirname, 'views/auth'),
  path.join(__dirname, 'views/user'),
  path.join(__dirname, 'views/activity')]);

app.set('view engine', 'pug'); // SET VIEW ENGINE

// CONFIGURE EXPRESS APP

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // ENABLE LOGGING
app.use(cookieParser()); // READ COOKIES (REQUIRED FOR AUTH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));


// SET SESSION OPTIONS
const sessionOptions = {
  saveUninitialized: true,
  secret: process.env.SECRET_SAUCE
};


app.use(session(sessionOptions)); // 1. ADD SESSION OPTIONS
app.use(passport.initialize()); // 2. INITIALIZE PASSPORT
app.use(flash()); // 3. FOR FLASH MESSAGES

app.use(passport.session());  // 4. RESTORE THE SESSION

// MODULE LOCATION FOR ROUTES
require('./auth/passport')(passport); // PASSPORT HAS TO BE FIRST ROUTE
require('./controllers/auth_route') (app, passport);
require('./controllers/index_route') (app);
require('./controllers/user_route') (app, passport);
require('./controllers/upload_route') (app);
require('./controllers/activity_route') (app);
require('./controllers/explore_route') (app);


// CATCH 404 AND FORWARD TO ERROR HANDLER
app.use(function (req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// HANDLE ERRORS
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// EXPORT THE APP MODULE
module.exports = app;

