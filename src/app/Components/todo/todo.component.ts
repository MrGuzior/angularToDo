import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/app/models/Todo';
import { ToDoService } from '../../Services/to-do.service'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() todo: ToDo;

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
  deleteTodo(todo) {
    console.log('delete')
  }

}
