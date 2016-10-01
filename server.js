
var config              = require('./config/config.json')[process.env.NODE_ENV || 'local'];
var Hapi                = require('hapi');
var routes              = require('./app/routes');

/**/
// db.sequelize.sync().then(function () {
    var server = new Hapi.Server();

    server.connection({
        port   : config.node.port,
        routes : {
            cors : {
                origin : ['*']
            }
        }
    });

    // Catch all undefined routes
    server.route({
        method  : '*',
        path    : '/{p*}',
        handler : function (request, reply) {
            return reply('The page was not found').code(404);
        }
    });
    // Load routes
    server.route(routes);

    server.start(function () {
        console.log('Server running at :', server.info.uri);
    });
// }).catch(function (err) {
//     console.error('Server didn\'t start ' + err)
// });
