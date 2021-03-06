module.exports = function(sequelize, Datatypes) {
    return sequelize.define('Team', {
        clubID  : {
            type        : Datatypes.INTEGER,
            allowNull   : false,
            references  : {
                model   : 'Club',
                key     : 'id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        coachID : {
            type        : Datatypes.INTEGER,
            allowNull   : true,
            references  : {
                model   : 'Utilisateur',
                key     : 'id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        name    : {
            type        : Datatypes.STRING,
            allowNull   : true
        }
    }, {
        freezeTableName: true
    });
}