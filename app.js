const express = require('express');
var path = require('path');
const cookieParser = require('cookie-parser');
var logger = require('morgan');
const db=require('./module/index.module');
//var indexRouter = require('./routes');
const usersRouter = require('./routes/users.js');

const app = express();
app.use(express.json());
app.use(logger('dev'));

//app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
db.sequelize.sync();
// db.sequelize.sync({force: true});
//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.listen(5000, (req,res)=>{
    console.log('Server is listening at port 5000')

 })

//module.exports = app;
