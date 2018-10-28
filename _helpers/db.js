const mongoose  = require('mongoose');
const config    = require('../config/config');

function connect() {
    mongoose.connect(config.connectionString);
    mongoose.Promise = global.Promise;    
}


module.exports = connect()