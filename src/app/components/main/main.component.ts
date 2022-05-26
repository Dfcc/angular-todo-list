import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title:string="Todo Traker";
  showAddTodo:boolean;
  subscription:Subscription;

  constructor( private uiService:UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showAddTodo=value));
   
  }

  ngOnInit(): void {
  }
  toggleAddTodo(){
   this.uiService.toggleAddTodo();
  }
 

}
