var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var passport = require('passport');
var session = require('express-session');
var app = express(); // CREATE INSTANCE OF EXPRESS OBJECT

// MIDDLE WARE
require('dotenv').config();  // ENABLE USE OF .ENV HIDDEN FILE FOR SECRETS
app.locals.moment = require('moment');

app.set('views', [
  path.join(__dirname, 'views/'),
  path.join(__dirname, 'views/auth'),
  path.join(__dirname, 'views/profile'),
  path.join(__dirname, 'views/activity')]);

app.set('view engine', 'pug'); // SET VIEW ENGINE

// CONFIGURE EXPRESS APP

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // ENABLE LOGGING
app.use(cookieParser()); // READ COOKIES (REQUIRED FOR AUTH)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
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
require('./routes/auth_route') (app, passport);
require('./routes/index_route') (app);
require('./routes/user_route') (app, passport);
require('./routes/upload_route') (app);
require('./routes/activity_route') (app);
require('./routes/explore_route') (app);


// CATCH 404 AND FORWARD TO ERROR HANDLER
app.use(function (req, res, next) {
  var err = new Error('Not Found');
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



// SET ROUTE URLS
// app.use('/', index);
// app.use('/user', user);  // TODO :: Complete routes for usr
// app.use('/auth', auth);  // TODO :: Complete routes for auth
// app.use('/explore', explore);
// app.use('/activity', activity); // TODO :: Complete routes for activity