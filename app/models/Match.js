module.exports = function(sequelize, Datatypes) {
    return sequelize.define('Match', {
        championshipID          : {
            type        : Datatypes.INTEGER,
            allowNull   : true
        },
        gymnasiumID             : {
            type        : Datatypes.INTEGER,
            allowNull   : true
        },
        date_d                  : {
            type        : Datatypes.DATE,
            allowNull   : false
        },
        team1ID                 : {
            type        : Datatypes.INTEGER,
            allowNull   : true
        },
        team2ID                 : {
            type        : Datatypes.INTEGER,
            allowNull   : true
        },
        scoreTeam1              : {
            type        : Datatypes.INTEGER,
            allowNull   : true
        },
        scoreTeam2              : {
            type        : Datatypes.INTEGER,
            allowNull   : true
        },
        teamQuiAccueilleID      : {
            type        : Datatypes.INTEGER,
            allowNull   : true
        }
    }, {
        freezeTableName: true
    });
}