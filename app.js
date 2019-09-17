var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jinmailangRouter = require('./routes/jinmailang');
var websiteRouter = require('./routes/website');
var website2Router = require('./routes/website2');
var heroRouter = require('./routes/hero');
var hero2Router = require('./routes/hero2');
var sanxingRouter = require('./routes/sanxing');
var sanxing2Router = require('./routes/sanxing2');
var airlineRouter = require('./routes/airline');
var yingshiRouter = require('./routes/yingshi');
var yingshi2Router = require('./routes/yingshi2');
var index1Router = require('./routes/index1');
var airline2Router = require('./routes/airline2');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jinmailang',jinmailangRouter);
app.use('/website',websiteRouter);
app.use('/website2',website2Router);
app.use('/hero',heroRouter);
app.use('/hero2',hero2Router);
app.use('/sanxing',sanxingRouter);
app.use('/sanxing2',sanxing2Router);
app.use('/airline',airlineRouter);
app.use('/yingshi',yingshiRouter);
app.use('/yingshi2',yingshi2Router);
app.use('/index1',index1Router);
app.use('/airline2',airline2Router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
