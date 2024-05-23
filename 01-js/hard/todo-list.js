/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos = [];
  }

  add(todo){
    this.todos.push(todo)
  }

  remove(indexOfTodo){
    let new_todos=[];
    for (let i = 0; i<this.todos.length; i++){
      if (i != indexOfTodo){
        new_todos.push(this.todos[i]);
      }
    }
    this.todos = new_todos;
  }
  
  update(index, updatedTodo){
    let new_todos=[];
    for (let i = 0; i<this.todos.length; i++){
      if (i == index){
        new_todos.push(updatedTodo);
      }
      else{
        new_todos.push(this.todos[i]);
      }

    }
    this.todos = new_todos;

  }

  getAll(){
    return this.todos;

  }

  get(indexOfTodo){
    for (let i = 0; i<this.todos.length; i++){
      if (i == indexOfTodo){
        return(this.todos[i]);
      }
    }
    return null
  }

  clear(){
    this.todos=[]
  }

}

module.exports = Todo;
