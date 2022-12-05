const express = require('express');
const { restart } = require('nodemon');
const student = require('./models/student');

var bodyParser = require('body-parser');
var path = require('path');
require('dotenv/config');
require('./db/conn')
 
const cors = require('cors')    

const app =express();
app.use(express.json());

app.use(cors());

//post for creating new reocrd
app.post('/std',(req,res)=>{
    console.log(req.body);
    const user = new student(req.body);
    user.save().then(()=>{
        res.status(201);
        res.send(user);
    }).catch((e)=>{
        res.status(400);
       res.send(e);
    })
});

//get for viewing all record
app.get('/std',async(req,res)=>{
    try{
        const studentData = await student.find();
        res.send(studentData)
    }catch(e){
        res.send(e);
    }
});

// get for viewing singal record
app.get('/std/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const studentData = await student.findById(id);
        if(!studentData)
        {
            return res.status(404).send();
        }
       else{
        res.send(studentData)
       }
    }catch(e){
        res.send(e);
    }
});

//delete for deleteing singal record
app.delete('/std/:id',async(req,res)=>{
   try{
    const id = req.params.id;
    const deleteStudent = await student.findByIdAndDelete(id)
    if(!id)
    {
        return res.status(400).send();
    }else{
        res.send(deleteStudent);
    }
   }catch(e){
    res.status(500).send(e);
   }
});

//patch for updating records
app.patch('/std/:id',async(req,res)=>{
    try{
        const id = req.params.id;
        const editStudent = await student.findByIdAndUpdate(id,req.body,{new:true});
        res.send(editStudent)
    }catch(e){
        res.send(e);
    }
});

const port = process.env.PORT || 6000;
app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});


 