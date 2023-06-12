const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
const gitRoutes = require('./routes/gif.routes');

const app = express();

app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())
app.use('/gif', gitRoutes)

module.exports = app