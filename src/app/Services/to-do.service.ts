import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ToDo } from '../models/Todo'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos'
  todosLimit = '?_limit=10'


  constructor(private http: HttpClient) { }

  getTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(`${this.todosUrl}${this.todosLimit}`)
  }

  toggleCompleted(todo: ToDo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.put(url, todo, httpOptions)
  }

  deleteTodo(todo: ToDo): Observable<any> {
    const url = `${this.todosUrl}/${todo.id}`
    return this.http.delete(url, httpOptions)
  }

  addTodo(todo: ToDo): Observable<any> {
    return this.http.post<ToDo>(this.todosUrl, todo, httpOptions)
  }
}
