const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('app');
const { connect } = require('mongoose');

const model = require('./src/models/model');

const route = require('./src/routes/route');

const app = express();
const port = process.env.PORT || 5000;

connect(process.env.DB_MONGO, { useNewUrlParser: true, useUnifiedTopology: true });
const hello = [];

app.use(morgan('dev'));

app.use(express.urlencoded({ extend: true }));
app.use(express.json());

app.use('/pokehub', route);

app.listen(port, () => {
  debug(`PROMOFARMA is running in ${chalk.bgGreen.bold(`http://localhost:${port}`)}`);
});
