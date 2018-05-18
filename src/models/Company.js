const mongoose = require('mongoose');

const CompanyModel = new mongoose.Schema({
  name: {
    type: String
  }
});

module.export = mongoose.model('Company', CompanyModel);