var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');




var signUpRouter = require('./routes/sign-up');

var forgetpassRouter = require('./routes/forget-pass')
const livereload = require("livereload");

var liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
// liveReloadServer.watch([path.join(__dirname, 'public'),path.join(__dirname, 'views')]);
var connectLivereload = require("connect-livereload");

var app = express();

app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 50);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);

app.use('/sign-up', signUpRouter);

// catch 404 and forward to error handler
app.use('/forget-pass', forgetpassRouter)
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