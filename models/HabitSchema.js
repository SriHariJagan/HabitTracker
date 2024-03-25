const mongoose = require('mongoose');

const habitSchema = new mongoose.Schema({
    habitName : {
        type : String,
        required : true
    },
    dates : [{
        date :  String,  
        day : String,
        status : String,
    }],
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }
});

const Habit = mongoose.model('Habit',habitSchema);

module.exports = Habit;