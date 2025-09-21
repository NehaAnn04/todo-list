const express = require('express');
const mongoose= require('mongoose');
const cors = require('cors');
const app =express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://nehaann:NEHA2004@cluster0.geplkdb.mongodb.net/todo').then(()=> {
    console.log('mongodb connected')
}).catch((err)=> {
     console.log(err)
});
const todoSchema =new mongoose.Schema({
    todoName:{
        type:String,
        required:true

    }
});
const Todo = mongoose.model('Todo',todoSchema);
app.post('/create',async(req,res) =>{
    const newTodo= new Todo({todoName: req.body.todo});
    await newTodo.save();
    res.status(201).json(newTodo);
});
    app.get('/getTodos',async(req,res)=>{
        const allTodos=await Todo.find();
        res.json(allTodos);
    });
    app.delete('/delete/:id',async(req,res)=>{
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json({success:true});
    });
    app.listen(5000,() => {
    console.log('server started on port 5000')
});

