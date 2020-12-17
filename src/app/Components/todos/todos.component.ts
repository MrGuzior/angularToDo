import { Component, OnInit } from '@angular/core';
import { ToDo } from '../../models/Todo'
import { ToDoService } from '../../Services/to-do.service'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ToDo[];

  constructor(private todoService: ToDoService) {

  }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => this.todos = todos)
  }
  deleteTodo(todo: ToDo) {
    this.todos = this.todos.filter(t => t.id !== todo.id)
    this.todoService.deleteTodo(todo).subscribe()
  }
  addTodo(todo: ToDo) {
    this.todoService.addTodo(todo).subscribe(todo => this.todos.push(todo))
  }

}
