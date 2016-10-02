var db = require('../models');

function MatchController() {
};

MatchController.prototype = (function () {
    return {
        getAll: function (request, reply) {
            db.Match.findAll()
                .then(function (matchs) {
                    return reply(matchs);
                }).catch(function (err) {
                    return reply('bad request');
                })
        },
        getById: function (request, reply) {
            var matchId = request.params.id;
            db.Match.findOne({
                where: {id: matchId}
            }).then(function (match) {
                return reply(match);
            }).catch(function (err) {
                return reply('bad request');
            });
        }
    }
})();

var matchController = new MatchController();
module.exports = matchController;
