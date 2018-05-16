'use strict';

var _require = require('mongoose'),
    Schema = _require.Schema,
    model = _require.model;

var CandidateModel = new Schema({});

module.exports = model('Candidate', CandidateModel);