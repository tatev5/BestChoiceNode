const mongoose = require("mongoose");
const { Schema } = mongoose;


const UserModel = new Schema({
    firstname:String,
    lastname:String,
    email:String,
    pass1:String,
    pass2:String,
    cash: Number
});

module.exports = mongoose.model('User', UserModel);