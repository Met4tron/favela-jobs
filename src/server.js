import { format } from 'util';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compress = require('compress');
const morgan = require('morgan');


const api = express();

api.use(cors());
api.use(compress());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.use(morgan('dev'));

api.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res
      .status(401)
      .send('Missing authentication credentials');
  }
});

app.listen(config.server.port, () => {
  console.log('Server is Running');
});