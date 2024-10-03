const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true
    },

    email : {
        type:String,
        requird:true
    },

    password : {
        type:String,
        required:true
    }
})

const Users = new mongoose.model("User",userSchema);
module.exports = Users;