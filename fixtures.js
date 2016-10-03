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