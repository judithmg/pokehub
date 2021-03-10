const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('app');
const mongoose = require('mongoose');
require('dotenv').config();

const pokemonRoute = require('./src/routes/pokemonRoutes');

const app = express();
const port = process.env.PORT || 5000;
const dbUrl = process.env.MONGO_DDBB;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));

app.use(express.urlencoded({ extend: true }));
app.use(express.json());

app.use('/pokehub/pokedex', pokemonRoute);

app.listen(port, () => {
  debug(`POKEHUB is running in ${chalk.bgGreen.bold(`http://localhost:${port}`)}`);
});
