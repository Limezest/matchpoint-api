var Path = require('path');
var fs   = require('fs');
var _    = require('underscore');

module.exports = [];

// Read files
fs.readdirSync(__dirname).filter(function (f) {
    // Filter JS files
    return f.substr(-3) === '.js' && f !== 'index.js' && f !== 'staticRoutes.js';
}).forEach(function (file) {
    // For each routes file
    var mod = require(Path.join(__dirname, file));

    // CORS header definition to allow HTTP Requests from any origin (webpage)
    for (var i = 0; i < mod.length; i++) {
        mod[i].config.cors = {
            origin      : ['*'],
            credentials : true,
            matchOrigin : true
        };

        mod[i].config.timeout = {
            server: 30000
        };
    }
    module.exports = module.exports.concat(mod);
});
