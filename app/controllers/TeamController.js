var db = require('../models');

function TeamController() {
};

TeamController.prototype = (function () {
    return {
        getAll: function (request, reply) {
            db.Team.findAll()
                .then(function (teams) {
                    return reply(teams);
                }).catch(function (err) {
                    return reply('bad request');
                })
        },
        getById: function (request, reply) {
            var teamId = request.params.id;
            db.Team.findOne({
                where: {id: teamId}
            }).then(function (team) {
                return reply(team);
            }).catch(function (err) {
                return reply('bad request');
            });
        }
    }
})();

var teamController = new TeamController();
module.exports = teamController;
