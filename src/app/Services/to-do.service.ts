import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs'
import { ToDo } from '../models/Todo'

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos?_limit=10'


  constructor(private http: HttpClient) { }

  getTodos(): Observable<ToDo[]> {
    return this.http.get<ToDo[]>(this.todosUrl)
  }
}
