const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors') 
const bodyParser = require('body-parser')
const multer = require('multer');
const upload = multer();


require('dotenv').config();
const mongoose = require("mongoose");


mongoose.set("strictQuery", false);
const mongoDB = process.env.MONGO_URI;

async function main() {
  await mongoose.connect(mongoDB);
};
main().catch((err) => console.log(err));



const adminRouter = require('./routes/admin');
const usersRouter = require('./routes/users');

const app = express();

let corsOptions = { 
  origin : ['http://localhost:5173'], 
} 

app.use(cors(corsOptions));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(upload.any()); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/admin', adminRouter);
app.use('/users', usersRouter);

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
