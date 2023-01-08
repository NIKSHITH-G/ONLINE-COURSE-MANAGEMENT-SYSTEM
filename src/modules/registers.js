const mongoose = require("mongoose");
var i =0;

const userSchema = new mongoose.Schema({
    fullname: String,
        
    username: {
        type:String,
        unique:true,
        required:true
       
    },
    email: {
        type:String,
      
    },
    password: {
        type:String,
      
    },
    gender: {
        type:String,
      
    },
    interests: {
       type:Array,
    },
    courses:{
        type:Array,
        unique:true
    }

}

)
const User = new mongoose.model("User",userSchema );
module.exports = User;
