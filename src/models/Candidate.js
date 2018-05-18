const mongoose = require('mongoose');

const CandidateModel = new mongoose.Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model('Candidate', CandidateModel);