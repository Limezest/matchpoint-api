var db = require('../models');

function GymnasiumController() {
};

GymnasiumController.prototype = (function () {
    return {
        getAll: function (request, reply) {
            db.Gymnasium.findAll()
                .then(function (gymnasiums) {
                    return reply(gymnasiums);
                }).catch(function (err) {
                    return reply('bad request');
                })
        },
        getById: function (request, reply) {
            var gymnasiumId = request.params.id;
            db.Gymnasium.findOne({
                where: {id: gymnasiumId}
            }).then(function (gymnasium) {
                return reply(gymnasium);
            }).catch(function (err) {
                return reply('bad request');
            });
        }
    }
})();

var gymnasiumController = new GymnasiumController();
module.exports = gymnasiumController;
