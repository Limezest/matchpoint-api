module.exports = function(sequelize, Datatypes) {
    return sequelize.define('Match', {
        championshipID          : {
            type        : Datatypes.INTEGER,
            allowNull   : true,
            references  : {
                model   : 'Championship',
                key     : 'id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        gymnasiumID             : {
            type        : Datatypes.INTEGER,
            allowNull   : true,
            references  : {
                model   : 'Gymnasium',
                key     : 'id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        date_d                  : {
            type        : Datatypes.DATE,
            allowNull   : false
        },
        team1ID                 : {
            type        : Datatypes.INTEGER,
            allowNull   : true,
            references  : {
                model   : 'Team',
                key     : 'id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        team2ID                 : {
            type        : Datatypes.INTEGER,
            allowNull   : true,
            references  : {
                model   : 'Team',
                key     : 'id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
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
            allowNull   : true,
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