module.exports = function(sequelize, Datatypes) {
    return sequelize.define('Championship', {
        name                : {
            type    : Datatypes.STRING,
            allowNull   : false
        },
        level               : {
            type    : Datatypes.INTEGER,
            allowNull   : true,
            references  : {
                model   : 'CS_Level',
                key     : 'id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        age                 : {
            type    : Datatypes.INTEGER,
            allowNull   : true,
            references  : {
                model   : 'CS_Age',
                key     : 'id',
                deferrable: sequelize.Deferrable.INITIALLY_IMMEDIATE
            }
        },
        masculinFeminin     : {
            type    : Datatypes.STRING,
            allowNull   : true
        }
    }, {
        freezeTableName: true
    });
}