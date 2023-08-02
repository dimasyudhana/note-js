const express = require('express');
const morgan = require("morgan");

const tourRouter = require('./routes/tour')
const userRouter = require('./routes/user')

const app = express();

// 1 Middlewares
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`))
app.use((req, res, next) => {
    console.log('halo dari middleware');
    next();
});

app.use((req, res, next) => {
    console.log('Halo dari middleware');
    req.requestTime = new Date().toISOString();
    next();
});

// 3 Mounting Routes

app.use('/api/v1/tours', tourRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;