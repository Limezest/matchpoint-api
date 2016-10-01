
var config              = require('./config/config.json')[process.env.NODE_ENV || 'local'];
var Hapi                = require('hapi');
var routes              = require('./app/routes');
var db                  = require('./app/models');

/**/
db.sequelize.sync().then(function () {
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



    /******DATABASE BULLSHIT********/
    // var club = {
    //     adminID : 1,
    //     name    : "name",
    //     picture : "picture",
    //     logo    : "logo",
    //     color   : "color",
    //     mail    : "mail",
    //     email   : "email",
    //     phone   : "phone",
    // };


    // db.Club.create(club, {'logging': true}).then(function(clubINSTANCE) {
    //     console.log(clubINSTANCE);
        
    //     clubINSTANCE.save().then(() => console.log('oui'))
    //     .catch(function(err) {
    //         console.log(err);
    //     });

    // }).catch(function (err) {
    //     console.log(err);
    // });

    // db.Utilisateur.create(utilisateur).then(function(utilisateurINSTANCE) {
    //     console.log(utilisateurINSTANCE);
        
    //     utilisateurINSTANCE.save().then(() => console.log('oui'))
    //     .catch(function(err) {
    //         console.log(err);
    //     });

    // }).catch(function (err) {
    //     console.log(err);
    // });
    


}).catch(function (err) {
    console.error('Server didn\'t start ' + err)
});