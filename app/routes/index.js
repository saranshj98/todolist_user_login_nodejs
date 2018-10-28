const reroutes  = require('express').Router();
const db        = require('../../_helpers/db');
const config    = require('../../config/config');
const User      = require('./User');
const Todotask  = require('./Todotask');


reroutes.get('/', (req, res) => {
    return res.send({
        error   : false,
        message : "Connected" 
    })
});


reroutes.use('/user', User);
reroutes.use('/todotask', Todotask);

module.exports = reroutes;