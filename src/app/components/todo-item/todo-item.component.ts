import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { UiService } from '../../services/ui.service';
import { TodoService } from '../../services/todo.service';
import { Subscription } from 'rxjs';
import { TODOS } from 'src/app/mock-todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Output() onDeleteTodo:EventEmitter<Todo>= new EventEmitter();
  @Output() onEditTodo:EventEmitter<Todo>= new EventEmitter();
  @Output() onToggleReminder:EventEmitter<Todo>= new EventEmitter();
  @Input() todo:Todo;
  faTimes = faTimes;
  showEditTodo:boolean;
  subscription:Subscription;
 

  constructor(private uiService:UiService,private todoService:TodoService) { 
     this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showEditTodo=value));
    
    
    }

  ngOnInit(): void {
  }

 

  onDelete(todo: Todo | undefined){
    this.onDeleteTodo.emit(todo);
  }
  onToggle(todo:Todo){
    this.onToggleReminder.emit(todo);
  }
  toggleEditTodo(){
    this.uiService.toggleEditTodo();
   }
  onEdit(todo:Todo){ 
    /* const todoIndex = this.todo.indexOf; */
    this.onEditTodo.emit(todo);
  }
  

}
