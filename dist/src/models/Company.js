'use strict';

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var CompanyModel = new Schema({});

module.export = model('Company', CompanyModel);