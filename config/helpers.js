const path = require('path');
const config = require('./');

exports.srcPathJoin = function srcPathJoin(filePath=''){
    return path.join(config.PATH.src, filePath)
};