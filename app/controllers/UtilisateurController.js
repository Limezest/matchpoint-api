var db = require('../models');

function UtilisateurController() {
};

UtilisateurController.prototype = (function () {
    return {
        getAll: function (request, reply) {
            db.Utilisateur.findAll()
                .then(function (utilisateurs) {
                    return reply(utilisateurs);
                }).catch(function (err) {
                    return reply('bad request');
                })
        },
        getById: function (request, reply) {
            var utilisateurId = request.params.id;
            db.Utilisateur.findOne({
                where: {id: utilisateurId}
            }).then(function (utilisateur) {
                return reply(utilisateur);
            }).catch(function (err) {
                return reply('bad request');
            });
        }
    }
})();

var utilisateurController = new UtilisateurController();
module.exports = utilisateurController;
