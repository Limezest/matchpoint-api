var db = require('../models');

function ChampionshipController() {
};

ChampionshipController.prototype = (function () {
    return {
        getAll: function (request, reply) {
            db.Championship.findAll()
                .then(function (championships) {
                    return reply(championships);
                }).catch(function (err) {
                    return reply('bad request');
                })
        },
        getById: function (request, reply) {
            var championshipId = request.params.id;
            db.Championship.findOne({
                where: {id: championshipId}
            }).then(function (championship) {
                return reply(championship);
            }).catch(function (err) {
                return reply('bad request');
            });
        }
    }
})();

var championshipController = new ChampionshipController();
module.exports = championshipController;
