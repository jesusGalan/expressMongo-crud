'use strict';

const express = require('express');
const http = require('http');

const routes = require('./src/routes');

const app = express();

routes(app);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const server = http.createServer(app);
const PORT = process.env.PORT || 65534;

exports.server = server.listen(PORT, () => console.log(`server running in http://localhost:${PORT}`));