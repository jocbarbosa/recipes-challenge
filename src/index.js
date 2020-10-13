require('dotenv/config');
const express = require('express');
const app = express();
const routes = require('./routes/');

app.use(routes.recipes);

const host = '0.0.0.0';

app.listen(process.env.PORT, host);