var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
var app = express();

//                     _oo0oo_
//                    o8888888o
//                    88" . "88
//                    (| -_- |)
//                    0\  =  /0
//                  ___/`---'\___
//                .' \|     |// '.
//               / \|||  :  |||// \
//              / _||||| -:- |||||- \
//             |   | \\  -  /// |   |
//             | \_|  ''\---/''  |_/ |
//             \  .-\__  '-'  ___/-. /
//           ___'. .'  /--.--\  `. .'___
//        ."" '<  `.___\_<|>_/___.' >' "".
//       | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//       \  \ `_.   \_ __\ /__ _/   .-` /  /
//   =====`-.____`.___ \_____/___.-`___.-'=====
//                     `=---='

require('./db');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
var indexRouter = require('./routes/index');

// view engine setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// 1) GLOBAL MIDDLEWARES

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Set security HTTP headers
app.use(helmet());

// Middleware
app.use(morgan('dev'));

// Limit requests from same API
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again in an hour',
});
app.use('api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
app.use(cors());
app.options('*', cors());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

//Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
    hpp()
    //  whitelist:['score','']
);

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Test middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toString();
    next();
});

// 3) Router
app.use('/', indexRouter);

// error handler
app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
