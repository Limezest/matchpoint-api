var TeamController = require('../controllers/TeamController');

module.exports = [
    {
        method: 'GET',
        path  : '/team/all',
        config: {
            handler : TeamController.getAll
        }
    },
    {
        method: 'GET',
        path  : '/team/get/{id}',
        config: {
            handler : TeamController.getById
        }
    }
];