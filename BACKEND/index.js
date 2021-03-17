const express = require('express');
const morgan = require('morgan');
const chalk = require('chalk');
const debug = require('debug')('app');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const pokemonRoutes = require('./src/routes/pokemonRoutes');
const userRoutes = require('./src/routes/userRoutes');
const teamRoutes = require('./src/routes/teamRoutes');

const app = express();
const port = process.env.PORT || 5000;
const dbUrl = process.env.MONGO_DDBB;

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(cors());

app.use(express.urlencoded({ extend: true }));
app.use(express.json());

app.use('/pokehub/pokedex', pokemonRoutes);
app.use('/pokehub/users', teamRoutes);
app.use('/pokehub/users', userRoutes);

app.listen(port, () => {
  debug(`POKEHUB is running in ${chalk.bgGreen.bold(`http://localhost:${port}`)}`);
});
