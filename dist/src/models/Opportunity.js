'use strict';

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var OpportunityModel = new Schema({});

module.exports = model('Opportunity', OpportunityModel);