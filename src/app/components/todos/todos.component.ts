import { Component, OnInit } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoService } from '../../services/todo.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';




@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[]=[];
  showEditTodo:boolean=false;
  subscription:Subscription;

  
  constructor(private todoService:TodoService,private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showEditTodo=value)); 
   }


  ngOnInit(): void {
   this.todoService.getTodos().subscribe((todos)=>(this.todos=todos));
  }
deleteTodo(todo:Todo){
  this.todoService.deleteTodo(todo).subscribe(()=>(this.todos=this.todos.filter(t=>t.id !== todo.id)));
}
toggleReminder(todo:Todo){
  todo.reminder = !todo.reminder;
  this.todoService.updateTodoReminder(todo).subscribe();
}
toggleEditTodo(){
  this.uiService.toggleEditTodo();
 }
addTodo(todo:Todo){
  this.todoService.addTodo(todo).subscribe((todo)=>(this.todos.push(todo)));
}
editTodo(todo:Todo){
  //const todoIndex = this.todos.indexOf;
  this.todoService.editTodo(todo).subscribe(()=>(this.todos=this.todos.filter(t=>t.id !== todo.id)));
}
}
