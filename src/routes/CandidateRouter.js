const Candidate = require('../controllers/CandidateController');

module.exports = (app) => {

    api.route('/candidate/:id')
        .get(Candidate.getCandidateById)
        .put(Candidate.updateCandidate)
        .delete(Candidate.deleteCandidate);
    
    api.route('/candidate/:id/opportunities')
        .get(Candidate.getOpportunities);
}   