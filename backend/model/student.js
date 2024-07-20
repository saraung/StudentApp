
var mongoose=require('mongoose')

var std_schema=mongoose.Schema({
    s_name:String,
    s_age:Number,
    s_dept:String,
    s_place:String,
    s_rollno:Number
})

var stdModel=mongoose.model('student',std_schema)

module.exports=stdModel;