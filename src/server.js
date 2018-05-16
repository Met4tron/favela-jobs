const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compress = require('compress');
const morgan = require('morgan');

const database = require('./config/database');

const api = express();

api.use(cors());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.use(morgan('dev'));

api.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Missing authentication credentials');
  }
});

fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
  require('./routes/' + file)(api);
});

database.connect.then(() => {
  app.listen(config.server.port, () => {
    console.log('Server is Running');
  });
}).catch((err) => console.error(err))
