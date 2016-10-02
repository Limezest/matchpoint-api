var UtilisateurController = require('../controllers/UtilisateurController');

module.exports = [
    {
        method: 'GET',
        path  : '/user/all',
        config: {
            handler : UtilisateurController.getAll
        }
    },
    {
        method: 'GET',
        path  : '/user/get/{id}',
        config: {
            handler : UtilisateurController.getById
        }
    }
];