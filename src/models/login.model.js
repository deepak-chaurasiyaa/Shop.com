const mongoose = require("mongoose");

const loginSchema = mongoose.Schema({
    email:{type:String, required:true},
    password:{type:String, required:true}
},{
    versionKey:false,
})

const login = mongoose.model("login-data", loginSchema);

module.exports = login;