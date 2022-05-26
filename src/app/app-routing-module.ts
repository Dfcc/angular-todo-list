import { NgModule } from "@angular/core";
import { Routes, RouterModule} from "@angular/router";
import { MainComponent } from "./components/main/main.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { TodosComponent } from "./components/todos/todos.component";
const routes: Routes = [
    { path: 'home', component:TodosComponent },
    { path: 'account', component: TodoItemComponent },
    { path: 'account/:id', component: TodoItemComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ]
@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{}