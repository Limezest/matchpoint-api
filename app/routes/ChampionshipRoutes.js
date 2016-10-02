var ChampionshipController = require('../controllers/ChampionshipController');

module.exports = [
    {
        method: 'GET',
        path  : '/championship/all',
        config: {
            handler : ChampionshipController.getAll
        }
    },
    {
        method: 'GET',
        path  : '/championship/get/{id}',
        config: {
            handler : ChampionshipController.getById
        }
    }
];