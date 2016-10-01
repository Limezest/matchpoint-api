module.exports = function(sequelize, Datatypes) {
    return sequelize.define('CS_Level', {
        value   : {
            type    : Datatypes.STRING,
            unique      : {
                "name"  : "unique_cslevel_value",
                msg     : "CS_LEVEL value doit être unique"
            },
            allowNull   : false
        }
    }, {
        freezeTableName: true
    });
}