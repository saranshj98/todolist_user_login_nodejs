const mongoose  = require('mongoose')
const moment    = require('moment')
const Todotask  = require('../../model/todotask')


//todoAction, todoId
function userTodo(req, res) {
    let default_dueDate = new Date(moment().add(1, 'd'));
    default_dueDate.setUTCHours(0,0,0,0)

    let body        = req.body
        todoId      = body.todo_id || null;
        todoAction  = body.todoAction || null;
        userId      = req.decoded._id;

    if(!todoId && !todoAction)  {

        let todotask = new Todotask()
        todotask.name           = body.name;
        todotask.comments       = body.comments;
        todotask.due_date       = body.due_date ? new Date(body.due_date) : default_dueDate;
        todotask.priority       = body.priority || 0;
        todotask.user_id        = userId;
        todotask.save((e) => {
            if(e) { 
                return res.send({
                    error : true,
                    message : "Error while saving todo"
                })  
            }

            else {
                return res.send({
                    error : false,
                    message : "new todo added",
                    result : todotask
                })
            }
        })
    }

    else if(todoId && todoAction === "edit" ) {
        Todotask.findByIdAndUpdate(
            { _id : mongoose.Types.ObjectId(todoId)},
            {
                $set : {
                    "name"          : body.name,
                    "complete"      : body.complete,
                    "priority"      : body.priority
                    //"comments"      : body.comments,
                    //"due_date"      : body.due_date ? new Date(body.due_date) : default_dueDate,
                }
            },
            { new : true },
            function(err, updatedDoc) {
                if(err) {
                    return res.send({
                        error : true,
                        message : "Error while updating todo"
                    })
                }

                else {
                    return res.send({
                        error : false,
                        message : "todo task updated"
                    })
                }
            }
        )
    }

    else if(todoId && todoAction === "remove" ) {
        Todotask.findByIdAndRemove(
            { _id : mongoose.Types.ObjectId(todoId)},
            function(err, removedDoc) {
                if(err) {
                    return res.send({
                        error : true,
                        message : "Error while removing todo"
                    })
                }

                else {
                    return res.send({
                        error : false,
                        message : "todo task deleted"
                    })
                }
            }
        )
    }

    else {
        return res.send({
            error : true,
            message : "No action specified"
        })
    }
}

module.exports = {
    userTodo
}