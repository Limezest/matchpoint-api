var MatchController = require('../controllers/MatchController');

module.exports = [
    {
        method: 'GET',
        path  : '/match/all',
        config: {
            handler : MatchController.getAll
        }
    },
    {
        method: 'GET',
        path  : '/match/get/{id}',
        config: {
            handler : MatchController.getById
        }
    }
];