module.exports = function(sequelize, Datatypes) {
    return sequelize.define('Championship', {
        name                : {
            type    : Datatypes.STRING,
            allowNull   : false
        },
        level               : {
            type    : Datatypes.INTEGER,
            allowNull   : true
        },
        age                 : {
            type    : Datatypes.INTEGER,
            allowNull   : true
        },
        masculinFeminin     : {
            type    : Datatypes.STRING,
            allowNull   : true
        }
    }, {
        freezeTableName: true
    });
}