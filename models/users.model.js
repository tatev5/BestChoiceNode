const mongoose = require("mongoose");
const { Schema } = mongoose;


const UserModel = new Schema({
    firstname:{
       type: String,
    },
    lastname:
    {
        type:String
    },
    email:
    {
        type:String,
        unique:true
    },
    password:
    {
        type:String
    },
    confirmPassword:{
        type:String
    },
    cash:{
        type:Number
    } 
});

module.exports = mongoose.model('User', UserModel);
