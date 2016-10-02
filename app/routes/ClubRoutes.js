var ClubController = require('../controllers/ClubController');

module.exports = [
    {
        method: 'GET',
        path  : '/club/all',
        config: {
            handler : ClubController.getAll
        }
    },
    {
        method: 'GET',
        path  : '/club/get/{id}',
        config: {
            handler : ClubController.getById
        }
    }
];