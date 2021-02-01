const express = require('express');
const path = require('path');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const connectMongoose = require("./controlers/mongooseCon.controller");
const bodyParser=require("body-parser");




const app = express();

//app.use(logger('dev'));

app.use(bodyParser.json()); 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/submit', usersRouter);


app
  .get('/signup', function (req, res) {
        res.sendFile(path.join(__dirname + '/public/index.html'));
        
  });

  app
  .post('/users', function (req, res) {
        res.render('account.html');
        
  });
  app.get('/registration', function (req, res) {
      return res.sendFile(path.join(__dirname + '/public/index.html'));
   });

app.listen(5050);


module.exports = app;
