var config = require('./config/config');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const mongoose = require('mongoose');
const bodyParser = require("body-parser");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));



app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//appel du methode connect()
connect();

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//connexion avec la base
function connect() {
  mongoose.connection
      .on('error', console.log)
      .on('disconnected', connect);
  return mongoose.connect(config.db.uri, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    user: config.db.user,
    pass: config.db.pass,
    authSource: config.db.dbName
  });
}

module.exports = app;
