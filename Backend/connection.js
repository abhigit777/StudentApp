//import mongoose
var mongoose = require('mongoose');


//connecting with db
mongoose.connect("mongodb+srv://abhinandha4532:abhi@cluster0.sf2uioi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("connected to db")
})
.catch((err)=>console.log(err));