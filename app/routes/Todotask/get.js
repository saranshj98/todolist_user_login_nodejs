const mongoose  = require('mongoose')
const moment    = require('moment')
const Todotask  = require('../../model/todotask')

function allUserTodo(req, res) {
    let userId = req.decoded._id
    Todotask.find({ 'user_id' : mongoose.Types.ObjectId(userId)})
    .sort({ "priority" : 1 })
    .exec((err, allUserTodo) => {
        if(err) {
            return res.send({
                error : true,
                message : "error while retrieving user todo"
            })
        }

        else {
            return res.send({
                error : false,
                message : "User todo retrieved successfully",
                allUserTodo : allUserTodo
            })
        }
    })
}

function singleTodo(req, res) {
    let todoId = req.params.todo_id;
    Todotask.findById(mongoose.Types.ObjectId(todoId)).exec((err, singleTodo) => {
        if(err) {
            return res.send({
                error : true,
                message : "error while retrieving todo"
            })
        } 
        
        else {
            return res.send({
                error : false,
                message : "Todo retrieved successfully",
                singleTodo : singleTodo
            })
        }
    })
}

module.exports = {
    allUserTodo,
    singleTodo
}