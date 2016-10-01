module.exports = function(sequelize, Datatypes) {
    return sequelize.define('CS_Age', {
        value   : {
            type    : Datatypes.STRING,
            unique      : {
                "name"  : "unique_csage_value",
                msg     : "CS_AGE value doit être unique"
            },
            allowNull   : false
        }
    }, {
        freezeTableName: true
    });
}