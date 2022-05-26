import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import{AppRoutingModule} from './app-routing-module'
import{RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormTodoComponent } from './components/form-todo/form-todo.component';
import { ButtonComponent } from './components/button/button.component';
import { TodosComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { AboutComponent } from './components/about/about.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
/* import { EditTodoFormComponent } from './components/edit-todo-form/edit-todo-form.component'; */
/* const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'about', component: AboutComponent },
]; */
/* const routes: Routes = [
  { path: 'home', component:AppComponent },
  { path: 'account', component: MainComponent },
  { path: 'account/:id', component: AccountDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
]
 */

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountDetailComponent, 
     MainComponent,
    TodosComponent, 
    TodoItemComponent,  
    ButtonComponent,
    FooterComponent,  
    EditTodoComponent,
     FormTodoComponent,
    /* EditTodoFormComponent */
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
   /* RouterModule.forRoot(routes, {enableTracing:true})  */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
