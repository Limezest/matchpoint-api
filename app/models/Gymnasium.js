module.exports = function(sequelize, Datatypes) {
    return sequelize.define('Gymnasium', {
        name        : {
            type        : Datatypes.STRING,
            allowNull   : false
        },
        location    : {
            type        : Datatypes.STRING,
            allowNull   : false
        },
        mail        : {
            type        : Datatypes.STRING,
            allowNull   : true
        },
        email       : {
            type        : Datatypes.STRING,
            allowNull   : true
        },
        phone       : {
            type        : Datatypes.STRING,
            allowNull   : true
        },
        capacity    : {
            type        : Datatypes.STRING,
            allowNull   : true
        }
    }, {
        freezeTableName: true
    });
}