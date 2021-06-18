
const fs = require('fs')
const path = require('path')
const root = require('../utils/root')
const p = path.join(root,'/data/todo.json')


module.exports = class Todo{
    constructor(todotext){
        this.todotext = todotext
    }
    static getFileInfo(cb){
        fs.readFile(p,(err,fileContent)=>{
            if(!err){
               return cb(JSON.parse(fileContent))
            }
           cb([])
        })
    }
    
    save(){
        this.id = Date.now().toString()
        Todo.getFileInfo(todos=>{
            const updatedTodos = [...todos]
            const isFound = updatedTodos.find(todo=>todo.todotext===this.todotext)
            if(isFound)
            {
                return console.log('Same Content');
            }
            const todo = {
                id : this.id,
                todotext : this.todotext
            }
            updatedTodos.push(todo)
                fs.writeFile(p,JSON.stringify(updatedTodos),(err)=>{
                    if(err){
                        console.log(err);
                    }
                })
            
        })
    }
    static fetchAll(cb){
         Todo.getFileInfo(todos=>{
            cb(todos)
         })
    }
    static deleteById(id,cb){
        Todo.getFileInfo(todos=>{
            let newTodos = [...todos]
            newTodos = newTodos.filter(todo=>todo.id!==id)
            fs.writeFile(p,JSON.stringify(newTodos),(err)=>{
                if(!err){
                    cb()
                }
            })

        })
    }
    
}

