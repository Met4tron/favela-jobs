'use strict';

var Company = require('../controllers/CompanyController');

module.exports = function (app) {
  app.route('/company:/id').get(Company.getCompanyById).put(Company.updateCompany).delete(Company.deleteCompany);

  app.route('/company/:id/opportunities').get(Company.getCompanyOpportunities);
};