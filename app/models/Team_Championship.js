module.exports = function(sequelize, Datatypes) {
    return sequelize.define('Team_Championship', {
        teamID   : {
            type    : Datatypes.INTEGER,
            allowNull   : false
        },
        championshipID   : {
            type    : Datatypes.INTEGER,
            allowNull   : false,
            references  : {
                model   : 'Championship',
                key     : 'id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        points   : {
            type    : Datatypes.INTEGER,
            allowNull   : false
        },
        played   : {
            type    : Datatypes.INTEGER,
            allowNull   : false
        },
        wins   : {
            type    : Datatypes.INTEGER,
            allowNull   : false
        },
        loss   : {
            type    : Datatypes.INTEGER,
            allowNull   : false
        },
        tie   : {
            type    : Datatypes.INTEGER,
            allowNull   : false
        }
    }, {
        freezeTableName: true
    });
}