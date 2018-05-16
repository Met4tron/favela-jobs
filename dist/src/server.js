'use strict';

var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var compress = require('compress');
var morgan = require('morgan');

var database = require('./config/database');

var api = express();

api.use(cors());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.use(morgan('dev'));

api.use(function (err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Missing authentication credentials');
  }
});

fs.readdirSync(path.join(__dirname, 'routes')).map(function (file) {
  require('./routes/' + file)(api);
});

database.connect.then(function () {
  app.listen(config.server.port, function () {
    console.log('Server is Running');
  });
}).catch(function (err) {
  return console.error(err);
});