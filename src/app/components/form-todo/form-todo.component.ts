import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';
import {Todo} from '../../Todo';

@Component({
  selector: 'app-form-todo',
  templateUrl: './form-todo.component.html',
  styleUrls: ['./form-todo.component.css']
})
export class FormTodoComponent implements OnInit {
  @Output() onAddTodo:EventEmitter<Todo>= new EventEmitter();
  text:string;
  day:string;
  reminder:boolean=false;
  showAddTodo:boolean=false;
  subscription:Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showAddTodo=value));
   }

  ngOnInit(): void {
  }
  onSubmit(){
    if(!this.text){
      alert('Please add a Todo');
      return;
    }
    const newTodo={
      text:this.text,
      day:this.day,
      reminder:this.reminder
    }
    //@todo- emit event

    this.onAddTodo.emit(newTodo);
    
    this.text='';
    this.day='';
    this.reminder=false;
  }

}
