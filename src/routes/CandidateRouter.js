const Candidate = require('../controllers/CandidateController');

module.exports = (app) => {
    app.route('/candidate/:id')
        .get(Candidate.getCandidateById)
        .put(Candidate.updateCandidate)
        .delete(Candidate.deleteCandidate);
    
    app.route('/candidate/:id/opportunities')
        .get(Candidate.getOpportunities);
}   