const todotask      = require('express').Router()
const verifyToken   = require('../../../_helpers/verifyTokenMiddleware');

const get   = require('./get');
const post  = require('./post');


todotask.get('/allUserTodo', verifyToken, get.allUserTodo);
todotask.get('/:todo_id', verifyToken, get.singleTodo);
todotask.post('/userTodo', verifyToken, post.userTodo);

module.exports = todotask