'use strict';

const express = require('express');
const session = require('express-session');
const http = require('http');
const bodyParser = require('body-parser');

const auth = require('./v1/auth');
const view = require('./view');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({
  secret: 'whatever',
  resave: false,
  saveUninitialized: true,
  cookie: {
    domain: '127.0.0.1'
  }
}));

// static file
app.set('view engine', 'jade');
app.use('/', view);

// api
app.use('/v1/auth', auth);

const port = process.env.PORT || '4000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));

module.exports = server;
