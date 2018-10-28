const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;


const TodotaskSchema = new Schema({
    user_id     : Schema.Types.ObjectId,
    name        : String,
    comments    : String,
    priority    : {                         // 0-low, 1-medium, 2-high 
        type    : Number,
        default : 0
    },
    due_date    : Date,
    complete    : {
        type    : Boolean,
        default : false
    },    
}, {
    timestamps : {createdAt: 'created_at', updatedAt: 'updated_at'},
    collection : 'Todotask'
});


module.exports = mongoose.model('Todotask', TodotaskSchema); 