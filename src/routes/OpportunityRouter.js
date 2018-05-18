const Opportunity = require('../controllers/OpportunityController');

module.exports = (app) => {
  app.route('/opportunities')
    .get(Opportunity.getOpportunities);
}