var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config()

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


 var pool = require('./models/bd');
      // Y ACA PUEDO HACER QUE ME TRAIGA INFO CON SELECTS, POR EJ:

     pool.query("select * from empleados").then(function(resultados){ //ES MUY UTIL EL LOG, PORQUE EN LA TERMINAL PUEDO VER Q ME TRAJO TODA LA INFO DE LOS EMPLEADOS
  console.log(resultados);
});

//////////////////

//AHORA QUE PASA CON UN INSERT? ANTES DEBERIA DE DECLARAR UNA VARIABLE LLAMADA OBJ
// var pool = require('./models/bd');

/* var obj = {
  nombre: 'Juan',
  apellido: 'Lopez',
  trabajo: 'Programador Senior',
  edad: '29',
  salario: '140000',
  mail: 'JuanLopez@bignet.com'
}

pool.query("insert into empleados set ?", [obj]).then(function(resultados){
  console.log(resultados);
}); */


////////////////////////


//AHORA UN UPDATE

/*var pool = require('./models/bd'); //ME EQUVOQUE EN LAS PRIMERAS EJECUSIONES Y ALTERE TODA LA INFO DE NOMBRES Y APELLIDOS DE LA BASE :).....

var id = '43';
var obj = {
  nombre: 'Joaquin',
  apellido: 'Gomez'
}

pool.query("update empleados set ? where id_emp = 43", [obj, id]).then(function(resultados){
  console.log(resultados);
}); */

///////////////


//AHORA UN DELETE

/*var pool = require('./models/bd');
var id = '43';
pool.query("delete from empleados where id_emp = 43", [id]).then(function(resultados){
  console.log(resultados);
}); */

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
