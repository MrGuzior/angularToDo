import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ToDo } from 'src/app/models/Todo';
import { ToDoService } from '../../Services/to-do.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: ToDo;
  @Output() deleteTodo: EventEmitter<ToDo> = new EventEmitter()

  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
  }

  setStyleClasses() {
    let classes = {
      todo: true,
      completed: this.todo.completed
    }
    return classes
  }

  onCompleted(todo) {
    todo.completed = !todo.completed
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))

  }
  onDeleteTodo(todo) {
    this.deleteTodo.emit(todo)
  }

}
