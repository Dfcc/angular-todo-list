import { Component, OnInit,Output,EventEmitter,Input,Inject } from '@angular/core';
import { Subscription } from 'rxjs';
import{Todo} from '../../Todo';
import { TodoService } from '../../services/todo.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {
  @Output() onEditTodo:EventEmitter<Todo>=new EventEmitter();
  text:string
  day:string
  reminder:boolean=false;
  showEditTodo:boolean=true;
  subscription:Subscription;
  
  constructor( public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public todo: Todo) { }
  
   
  
  ngOnInit(): void {
    
  }
  close() {
    this.dialogRef.close()
  }

  onSubmit(){
    if(!this.text){
      alert('please add a task');
      return;
    }
    const updatedTodo ={
      text:this.text,
      day:this.day,
      reminder:this.reminder

    }
    this.dialogRef.close(updatedTodo);

  
  }
/*   editTodo(id:number, editText:string) :void{
    this.todos.map((value, idx) => {
      if(idx === id) {
        console.log(value.name)
        value.name = editText;

        console.log("edited")
        this.setEdit(id);
      }

      return value;
    })
  }
 */

}
