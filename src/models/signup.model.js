const mongoose = require("mongoose");

const signUpSchema = mongoose.Schema({
    userName:{type:String, required:true},
    password:{type:String, required:true},
    email:{type:String, required:true},
    
},{
    versionKey:false,
    timestamps:true
})

const signUp = mongoose.model("signups", signUpSchema);

module.exports = signUp;