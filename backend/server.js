//1.importing express
var express =require('express')
var cors=require('cors')
require('./connection')


var model=require('./model/student');

//2,initialization
var app=express();

//3.middleware

app.use(express.json());

app.use(cors())

//4.api


app.post("/add",async (req,res)=>{
    try {
        await model(req.body).save()
        res.send({message:'data added'});
    } catch (error) {
        console.log(error);
    }
})

app.get('/view',async(req,res)=>{
    try {
           var std= await model.find();
           res.send(std);
    } catch (error) {
       console.log(error)
    }
   })

app.delete('/remove/:a',async(req,res)=>{   
    var id=req.params.a
    console.log(id)
    try {
        await model.findByIdAndDelete(id)
        res.send({message:'deleted  succesfully'})
    } catch (error) {
        console.log(error)
    }
})


   app.put('/edit/:b',async(req,res)=>{
       var id=req.params.b
       console.log(id)
       try {
           var std=await model.findByIdAndUpdate(id,req.body)
          res.send({message:'updated successfully'},data) 
       } catch (error) {
           console.log(error)
       }
   })

//5.connecting to port 

app.listen('3007',()=>{
    console.log('port is up and running !')
})











// app.get('/view',async(req,res)=>{
//     try {
//            var emp= await model.find();
//            res.send(emp);
//     } catch (error) {
//        console.log(error)
//     }
//    })
   
//    // to delete a document
//    app.delete('/remove/:a',async(req,res)=>{
//        var id=req.params.a
//        console.log(id)
//        try {
//            await model.findByIdAndDelete(id)
//            res.send('deleted  succesfully')
//        } catch (error) {
//            console.log(error)
//        }
//    })
   
//    // to update a document 
//    app.put('/edit/:b',async(req,res)=>{
//        var id=req.params.b
//        console.log(id)
//        try {
//            var emp=await model.findByIdAndUpdate(id,req.body)
//           res.send('updated successfully') 
//        } catch (error) {
//            console.log(error)
//        }
//    })