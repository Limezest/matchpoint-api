var GymnasiumController = require('../controllers/GymnasiumController');

module.exports = [
    {
        method: 'GET',
        path  : '/gymnasium/all',
        config: {
            handler : GymnasiumController.getAll
        }
    },
    {
        method: 'GET',
        path  : '/gymnasium/get/{id}',
        config: {
            handler : GymnasiumController.getById
        }
    }
];