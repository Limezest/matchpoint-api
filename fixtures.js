/**
 * Created by arie on 22/10/15.
 */


/*
 Server
 */
var db     = require('./app/models');
var routes = require('./app/routes');
var config = require('./config/config.json')[process.env.NODE_ENV || 'local'];

db.sequelize.sync().then(function () {
    fixture();
    setTimeout(function() {
        console.log('pause');
    }, 10000);
}).catch(function (err) {
    console.error('Server didn\'t start ' + err)
});

var fixture = function () {
    db.Utilisateur.create({
        firstname   : "bruce",
        lastname    : "lastname",
        mail        : "mail",
        email       : "email1",
        phone       : "phone1",
        birthday    : "birthday",
        isAdmin     : false,
        isPlayer    : false,
        isCoach     : false
    }).catch(function (err) {
        console.log(err);
    });

    db.Club.create({
        adminID     : "1",
        name        : "Club des vainqueurs",
        picture     : "",
        logo        : "",
        color       : "Rose",
        mail        : "",
        email       : "vainqueurs@ffbb.fr",
        phone       : ""
    }).catch(function (err) {
        console.log(err);
    });
};


var clubsList = [
    {
        clubID: 11623,
        name: "U.S. NANTUATIENNE",
        adminID: 1,
        email: "oui1@gmail.com"
    },
    {
        clubID: 183754,
        name: "FOOTBALL CLUB COTIERE-LUENAZ",
        adminID: 1,
        email: "oui2@gmail.com"
    },
    {
        clubID: 2220,
        name: "U.S. ARBENT MARCHON",
        adminID: 1,
        email: "oui3@gmail.com"
    },
    {
        clubID: 2235,
        name: "A.S. MONTREVEL",
        adminID: 1,
        email: "oui4@gmail.com"
    },
    {
        clubID: 5857,
        name: "ET. S. FOISSIAT ETREZ",
        adminID: 1,
        email: "oui5@gmail.com"
    },
    {
        clubID: 155001,
        name: "U. S. LE GRAND COLOMBIER",
        adminID: 1,
        email: "oui6@gmail.com"
    },
    {
        clubID: 13313,
        name: "O. DE ST DENIS LES BOURG",
        adminID: 1,
        email: "oui7@gmail.com"
    },
    {
        clubID: 2161,
        name: "F.C. LA VALLIERE",
        adminID: 1,
        email: "oui8@gmail.com"
    },
    {
        clubID: 138710,
        name: "F. C. BRESSANS",
        adminID: 1,
        email: "oui9@gmail.com"
    },
    {
        clubID: 161261,
        name: "FOOTBALL CLUB DE BELLEY",
        adminID: 1,
        email: "oui10@gmail.com"
    },
    {
        clubID: 25312,
        name: "AIN SUD F.",
        adminID: 1,
        email: "oui11@gmail.com"
    },
    {
        clubID: 7805,
        name: "ESB FOOTBALL MARBOZ",
        adminID: 1,
        email: "oui12@gmail.com"
    }
];
db.Club.bulkCreate(clubsList)
    .then((clubINSTANCE) => {clubINSTANCE.save();})