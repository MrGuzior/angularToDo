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

}
