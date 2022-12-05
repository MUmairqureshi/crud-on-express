const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema({
    // name:{
    //     type:String,
    //     required:true,
    //     minlength:3
    // },
    
    // email:{
    //     // type:String,
    //     required:true,
    //     // unique:true
    // },
    //     phone:{
    //        type:Number,
    //        min:10
           
    //     }

    name : String ,
    username: String,
    email : String,
    phone: String
    })
const student = new mongoose.model('Student',studentSchema);
module.exports = student;


































