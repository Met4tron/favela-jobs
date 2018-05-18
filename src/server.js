require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compress = require('compress');
const morgan = require('morgan');
const helmet = require('helmet');
const mongoose = require('mongoose');
const config = require('./config/config');
const api = express();

api.use(cors());
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());
api.use(morgan('dev'));
api.use(helmet());

api.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('Missing authentication credentials');
  }
});

fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
  require('./routes/' + file)(api);
});

function connectDatabase() {
  mongoose.connect(`mongodb://${config.DB.HOST}:${config.DB.PORT}/${config.DB.NAME}`)
    .then(() => {
      api.listen(3000, () => console.log('Server is running'))
    })
}
connectDatabase();