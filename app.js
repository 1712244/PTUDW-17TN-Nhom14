var createError = require("http-errors");
var express = require("express");
const session = require('express-session');
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var hbs = require("hbs");
const accountService = require('./services/account');

require("./routes/front-end/helper/lib-helper.js");

// Setup livereload
const livereload = require("livereload");


// // connect db
const mongo = require("./db/mongo");
mongo.connectMongo()



var liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));
var connectLivereload = require("connect-livereload");

var hbs = require("hbs");
var app = express();
app.set("view options", { layout: false });
hbs.registerPartials(path.join(__dirname, "views/partials"));
hbs.registerHelper('ifeq', function(arg1, arg2, options) {
    return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});


app.use(connectLivereload());
liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 50);
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
    session({
        secret: 'thuvien',
		saveUninitialized: true,
		resave: true
	})
    );
    
app.use(express.static(path.join(__dirname, "public")));
app.use(async function(req, res, next){
	if (req.session.username){
        res.locals.user = await accountService.getUserInfo(req.session.username);
    }
	next();
});

// Set path render zone
app.use("/", require("./routes/front-end/index"));
app.use("/users", require("./routes/front-end/users"));
app.use("/login", require("./routes/front-end/login"));
app.use("/categories", require("./routes/front-end/categories"));
app.use("/storage", require("./routes/front-end/storage"));
app.use("/search", require("./routes/front-end/search"));
app.use("/sign-up", require("./routes/front-end/sign-up"));
app.use("/about", require("./routes/front-end/about"));
app.use("/librarian", require("./routes/front-end/index-lib"));
app.use("/librarian/borrow", require("./routes/front-end/borrow"));
app.use("/librarian/return", require("./routes/front-end/return"));
app.use("/librarian/borrower", require("./routes/front-end/borrower-profile"));
app.use("/librarian/librarian-login", require("./routes/front-end/librarian-login"));
app.use("/librarian/post-announcer", require("./routes/front-end/post-announcer"))
app.use("/librarian/lib-confirmID", require("./routes/front-end/lib-confirmID"));
app.use("/librarian/lib-profile", require("./routes/front-end/lib-profile"));
app.use("/librarian/lib-law", require("./routes/front-end/lib-law"));
app.use("/librarian/account-manager", require("./routes/front-end/account-manager"));
app.use("/librarian/booking-manager", require("./routes/front-end/lib-booking-book-manager"));
app.use("/librarian/book", require("./routes/front-end/book-info-lib"));

// set path render news
app.use("/news", require("./routes/front-end/news"));
app.use("/news-detail", require("./routes/front-end/news-detail"));

app.use("/book-detail", require("./routes/front-end/book-detail"));

app.use("/forget-pass", require("./routes/front-end/forget-pass"));
app.use("/profile", require("./routes/front-end/profile"));
app.use("/carts", require("./routes/front-end/carts"));
app.use("/cart-detail", require("./routes/front-end/cart-detail"));
app.use("/buy-book", require("./routes/front-end/buy-book"))
app.use("/return-book-list", require("./routes/front-end/return-book-list"));
app.use("/rent-book-list", require("./routes/front-end/rent-book-list"));
app.use("/buy-book-manager", require("./routes/front-end/buy-book-manager"));
app.use("/change-password", require("./routes/front-end/change-password"))

app.use("/api", require("./routes/back-end/account")());
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});

module.exports = app;