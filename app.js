var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var bodyParser = require('body-parser')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser());


app.use('/orders', indexRouter);
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'DELETE,PUT,GET,POST');
  res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With, Content-Type,Accept");
  next();
})
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// i can create the .env file and map the envirment variable here, but for pushing a env file to repo is not a good practice. so i am calling the db conncection here explicity.  This is test, so i am doing this way, if it a real apps, then i would have use .env file here.
mongoose.connect('mongodb://khirasindhu:khirasindhu1@ds345937.mlab.com:45937/buzzboard-test-db').then(connected => {
  console.log("DB CONNECTED SUCCESSFULLY")
}).catch(errorConnect => {
  console.log("DB CONNECTION FAILED")
})
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;