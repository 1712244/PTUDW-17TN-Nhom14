var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var hbs = require('hbs');
require('./routes/lib-helper.js');

// set router zone
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var searchRouter = require('./routes/search');

var signUpRouter = require('./routes/sign-up');

var forgetpassRouter = require('./routes/forget-pass');
var categoriesRouter = require('./routes/categories');
var storageRouter = require('./routes/storage');
var aboutRouter = require('./routes/about');

var newsRouter = require('./routes/news');

var newsDetailRouter = require('./routes/news-detail');
var bookDetailRouter = require('./routes/book-detail');
var profileRouter = require('./routes/profile');
var cartsRouter = require('./routes/carts');
var cartDetailRouter = require('./routes/cart-detail');
var buyBookRouter = require('./routes/buy-book')
var returnBookListRouter = require('./routes/return-book-list');
var rentBookListRouter = require('./routes/rent-book-list');
var indexLibRouter = require('./routes/index-lib');
var borrowRouter = require('./routes/borrow');
var borrowerRouter = require('./routes/borrower-profile');
var librarianLoginRouter = require('./routes/librarian-login');
var bookInfoLibRouter = require('./routes/book-info-lib');



var buybookManager = require('./routes/buy-book-manager')

// Setup livereload
const livereload = require("livereload");

var liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));
var connectLivereload = require("connect-livereload");

var hbs = require('hbs');
var app = express();
app.set('view options', { layout: false });

hbs.registerPartials(path.join(__dirname, 'views/partials'));


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

// Set path zone
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/storage', storageRouter);
app.use('/search', searchRouter);
app.use('/sign-up', signUpRouter);
app.use('/about', aboutRouter);
app.use('/librarian', indexLibRouter);
app.use('/librarian/borrow', borrowRouter);
app.use('/librarian/borrower', borrowerRouter);
app.use('/librarian/librarian-login', librarianLoginRouter);
app.use('/librarian/book', bookInfoLibRouter);

// set path news
app.use('/news', newsRouter);
app.use('/news-detail', newsDetailRouter);

app.use('/book-detail', bookDetailRouter);

app.use('/forget-pass', forgetpassRouter);
app.use('/profile', profileRouter);
app.use('/carts', cartsRouter);
app.use('/cart-detail', cartDetailRouter);
app.use('/buy-book', buyBookRouter)
app.use('/return-book-list', returnBookListRouter);
app.use('/rent-book-list', rentBookListRouter);
app.use('/buy-book-manager', buybookManager);

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