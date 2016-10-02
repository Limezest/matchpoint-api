
var config              = require('./config/config.json')[process.env.NODE_ENV || 'local'];
var Hapi                = require('hapi');
var routes              = require('./app/routes');
var db                  = require('./app/models');

/**/
db.sequelize.sync({force: true}).then(function () {
    var server = new Hapi.Server();

    server.connection({
        port   : config.node.port,
        routes : {
            cors : {
                origin : ['*']
            }
        }
    });

    // // Catch all undefined routes
    // server.route({
    //     method  : '*',
    //     path    : '/{p*}',
    //     handler : function (request, reply) {
    //         return reply('The page was not found').code(404);
    //     }
    // });

    // Load routes
    server.route(routes);

    server.start(function () {
        console.log('Server running at :', server.info.uri);
    });



    /************DATABASE BULLSHIT************/
    var utilisateurDATA = {
        id: 1,
        firstname   : "firstname",
        lastname    : "lastname",
        mail        : "mail",
        email       : "email1",
        phone       : "phone1",
        birthday    : "birthday",
        isAdmin     : false,
        isPlayer    : false,
        isCoach     : false
    };
    db.Utilisateur.create(utilisateurDATA).then(function(utilisateurINSTANCE) {
        console.log(utilisateurINSTANCE);
        
        utilisateurINSTANCE.save().then(function () {

            var clubsList = [
                {
                    id: 11623,
                    name: "U.S. NANTUATIENNE",
                    adminID: 1,
                    email: "oui1@gmail.com"
                },
                {
                    id: 183754,
                    name: "FOOTBALL CLUB COTIERE-LUENAZ",
                    adminID: 1,
                    email: "oui2@gmail.com"
                },
                {
                    id: 2220,
                    name: "U.S. ARBENT MARCHON",
                    adminID: 1,
                    email: "oui3@gmail.com"
                },
                {
                    id: 2235,
                    name: "A.S. MONTREVEL",
                    adminID: 1,
                    email: "oui4@gmail.com"
                },
                {
                    id: 5857,
                    name: "ET. S. FOISSIAT ETREZ",
                    adminID: 1,
                    email: "oui5@gmail.com"
                },
                {
                    id: 155001,
                    name: "U. S. LE GRAND COLOMBIER",
                    adminID: 1,
                    email: "oui6@gmail.com"
                },
                {
                    id: 13313,
                    name: "O. DE ST DENIS LES BOURG",
                    adminID: 1,
                    email: "oui7@gmail.com"
                },
                {
                    id: 2161,
                    name: "F.C. LA VALLIERE",
                    adminID: 1,
                    email: "oui8@gmail.com"
                },
                {
                    id: 138710,
                    name: "F. C. BRESSANS",
                    adminID: 1,
                    email: "oui9@gmail.com"
                },
                {
                    id: 161261,
                    name: "FOOTBALL CLUB DE BELLEY",
                    adminID: 1,
                    email: "oui10@gmail.com"
                },
                {
                    id: 25312,
                    name: "AIN SUD F.",
                    adminID: 1,
                    email: "oui11@gmail.com"
                },
                {
                    id: 7805,
                    name: "ESB FOOTBALL MARBOZ",
                    adminID: 1,
                    email: "oui12@gmail.com"
                }
            ];
            db.Club.bulkCreate(clubsList)
                .then((clubINSTANCE) => {console.log(clubINSTANCE);})

        }).catch(function(err) {
            console.log(err);
        });

    }).catch(function (err) {
        console.log(err);
    });

    var clubDATA = {
        adminID     : 1,
        name        : "Club des vainqueurs",
        picture     : "",
        logo        : "",
        color       : "Rose",
        mail        : "",
        email       : "vainqueurs@ffbb.fr",
        phone       : ""
    };

    db.Club.create(clubDATA).then(function(clubINSTANCE) {
        console.log(clubINSTANCE);
        
        // clubINSTANCE.save().then(() => console.log('oui'))


    }).catch(function (err) {
        console.log(err);
    });

    // db.Utilisateur.findAll().then(function(utilisateurs) {
    //     console.log(utilisateurs);
    // })


}).catch(function (err) {
    console.error('Server didn\'t start ' + err)
});