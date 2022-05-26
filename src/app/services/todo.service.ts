import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{TODOS} from '../mock-todos';
import { Observable } from 'rxjs';
import { Todo } from '../Todo';

const httpOptions ={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  detectChanges() {
    throw new Error('Method not implemented.');
  }
  private apiUrl ="http://localhost:5000/todos"

  constructor( private http:HttpClient) { }
  getTodos(): Observable<Todo[]>{
   return this.http.get<Todo[]>(this.apiUrl);
  }
  getTodo(todo:Todo): Observable<Todo[]>{
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.get<Todo[]>(url);
   }
  deleteTodo(todo:Todo): Observable<Todo>{
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.delete<Todo>(url);

  }
  updateTodoReminder(todo:Todo): Observable<Todo>{
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, httpOptions);

  }
  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.apiUrl, todo, httpOptions);

  }
  editTodo(todo:Todo):Observable<Todo>{
    const url = `${this.apiUrl}/${todo.id}`;
    return this.http.put<Todo>(url, todo, httpOptions);

  }
}
