//1.importing mongoose
 var mongoose = require('mongoose');

 //2.schema creation
 var  stuSchema = mongoose.Schema({
    s_name:String,
    s_age:Number,
    s_rollno:Number,
    s_place:String,
    s_department:String,
 });

 //3.model creation
 var stuModel = mongoose.model("Student",stuSchema);
 module.exports = stuModel;