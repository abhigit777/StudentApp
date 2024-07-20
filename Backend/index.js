//1.importing express
var express = require('express');
require('./connection')
var stuModel = require('./Model/Student')
var cors = require('cors')

//2.initialisation
var app = express();


//3.middleware
app.use(express.json());
app.use(cors());


//4.API
app.post("/add",async(req,res)=>{
    try {
        await stuModel(req.body).save()
        res.send({message : "data added"});
    } catch (error) {
        console.log(error)
        
    }
})

app.get('/view',async(req,res)=>{
    try {
           var data= await stuModel.find();
           res.send(data);
    } catch (error) {
       console.log(error)
    }
   })


   app.delete('/remove/:id',async(req,res)=>{
    try {
           var id= req.params.id;
           await stuModel.findByIdAndDelete(id)
           res.send({message:'deleted successfully'});
    } catch (error) {
       console.log(error)
    }
   })

   app.put("/edit/:id",async(req,res)=>{
    var id = req.params.id
    try {

        var emp = await stuModel.findByIdAndUpdate(id,req.body)
        res.send({message:'updated successfully'});
    } catch (error) {
        console.log(error)
    }
})



//5.connecting to port
app.listen('3007',()=>{
    console.log("port is up and running!!")
})