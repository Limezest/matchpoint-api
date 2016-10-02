var db = require('../models');

function ClubController() {
};

ClubController.prototype = (function () {
    return {
        getAll: function (request, reply) {
            db.Club.findAll()
                .then(function (clubs) {
                    return reply(clubs);
                }).catch(function (err) {
                    return reply('bad request');
                })
        },
        getById: function (request, reply) {
            var clubId = request.params.id;
            db.Club.findOne({
                where: {id: clubId}
            }).then(function (club) {
                return reply(club);
            }).catch(function (err) {
                return reply('bad request');
            });
        }
    }
})();

var clubController = new ClubController();
module.exports = clubController;
