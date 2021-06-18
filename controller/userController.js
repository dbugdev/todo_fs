const Todo = require('../model/Todo')

module.exports.getIndex = (req,res,next)=>{
    //render the topic
    Todo.fetchAll(todos=>{
        res.render('index',{
            todos : todos.reverse()
        })
    })
    
}
module.exports.postIndex = (req,res,next)=>{
    //render the topic
    const todo = new Todo(req.body.todotext.trim())
    todo.save()
    res.redirect('/')
   
}

module.exports.postDelete = (req,res,next)=>{
    const id = req.body.todoid
    Todo.deleteById(id,()=>{res.redirect('/')});
    
}