module.exports = function(sequelize, Datatypes) {
    return sequelize.define('Team', {
        clubID  : {
            type        : Datatypes.STRING,
            allowNull   : false
        },
        coachID : {
            type        : Datatypes.STRING,
            allowNull   : true
        },
        name    : {
            type        : Datatypes.STRING,
            allowNull   : true
        }
    }, {
        freezeTableName: true
    });
}