module.exports = function(sequelize, Datatypes) {
    return sequelize.define('Follow_Team', {
        userID   : {
            type    : Datatypes.INTEGER,
            allowNull   : false,
            references  : {
                model   : 'Utilisateur',
                key     : 'id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        teamID   : {
            type    : Datatypes.INTEGER,
            allowNull   : false,
            references  : {
                model   : 'Team',
                key     : 'id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        }
    }, {
        freezeTableName: true
    });
}