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
app.use('/product', usersRouter);




  
 

app.listen(5050);


module.exports = app;
