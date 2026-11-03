const mongoose = require('mongoose');
const subTodoSchema = new mongoose.Schema({
    content:{
        type: String,
        require: true,
    },
    complete: {
        type: Boolean,
        require:false,
    },
    createdBy: {
        type: mongoose.Schema.type.ObjectID,
        ref: 'User',

    }
},{timestamps:true});

export default mongoose.model('SubTodo', subTodoSchema);