module.exports = function(sequelize, Datatypes) {
    return sequelize.define('Utilisateur', {
        firstname	: {
            type        : Datatypes.STRING,
            allowNull   : false
        },
        lastname	: {
            type        : Datatypes.STRING,
            allowNull   : false
        },
        mail	: {
            type        : Datatypes.STRING,
            allowNull   : true
        },
        email	: {
            type        : Datatypes.STRING,
            unique      : {
                name: "unique_utilisateur_email",
                msg  : "Email utilisateur déjà enregistré"
            },
            allowNull   : false
        },
        phone	: {
            type        : Datatypes.STRING,
            unique      : {
                name: "unique_utilisateur_phone",
                msg  : "Téléphone utilisateur déjà enregistré"
            },
            allowNull   : true
        },
        birthday: {
            type        : Datatypes.STRING,
            allowNull   : true
        },
        isAdmin	: {
            type        : Datatypes.BOOLEAN,
            defaultValue: false,
            allowNull   : true
        },
        isPlayer: {
            type        : Datatypes.BOOLEAN,
            defaultValue: false,
            allowNull   : true
        },
        isCoach	: {
            type        : Datatypes.BOOLEAN,
            defaultValue: false,
            allowNull   : true
        }
    }, {
        freezeTableName: true
    });
}