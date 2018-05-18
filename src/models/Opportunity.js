const mongoose = require('mongoose');

const OpportunityModel = new mongoose.Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  description: {
    type: String
  }
})

module.exports = mongoose.model('Opportunity', OpportunityModel);