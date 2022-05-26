import { Injectable } from '@angular/core';
import {Observable,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTodo: boolean= false;
  private showEditTodo: boolean= false;
  private subject = new Subject<any>();

  constructor() { }
  toggleAddTodo(): void {
    this.showAddTodo = !this.showAddTodo;
    this.subject.next(this.showAddTodo);
  }
  toggleEditTodo(): void {
    this.showEditTodo = !this.showEditTodo;
    this.subject.next(this.showEditTodo);
  }

  onToggle(): Observable<any>{
    return this.subject.asObservable()
  }
}
