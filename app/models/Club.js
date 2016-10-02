module.exports = function(sequelize, Datatypes) {
    return sequelize.define('Club', {
        adminID	: {
            type        : Datatypes.INTEGER,
            allowNull   : false,
            references  : {
                model   : 'Utilisateur',
                key     : 'id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        name	: {
            type    : Datatypes.STRING,
            allowNull   : false
        },
        picture	: {
            type    : Datatypes.STRING,
            allowNull   : true
        },
        logo	: {
            type    : Datatypes.STRING,
            allowNull   : true
        },
        color	: {
            type    : Datatypes.STRING,
            allowNull   : true
        },
        mail	: {
            type    : Datatypes.STRING,
            allowNull   : true
        },
        email	: {
            type    : Datatypes.STRING,
            unique  : {
                "name"  : "unique_club_email",
                "msg"   : "Club email doit être unique"
            },
            allowNull   : false
        },
        phone	: {
            type    : Datatypes.STRING,
            unique  : {
                "name"  : "unique_club_phone",
                "msg"   : "Téléphone du club doit être unique"
            },
            allowNull   : true
        }
    }, {
        freezeTableName : true // Model tableName will be the same as the model name
    });
}