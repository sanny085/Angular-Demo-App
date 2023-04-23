import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaincardComponent } from './maincard/maincard.component';
import { TodosComponent } from './TodosComponent/todos/todos.component';
import { TodoItemComponent } from './TodosComponent/todo-item/todo-item.component';
import { AddTodoComponent } from './TodosComponent/add-todo/add-todo.component';

import { FormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MaincardComponent },
  { path: 'users', component: TodosComponent },
  { path: 'about', component: AboutComponent },
  { path: 'servers', component: ServersComponent },
  { path: '**', component: ServerComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HeaderComponent,
    FooterComponent,
    MaincardComponent,
    TodosComponent,
    TodoItemComponent,
    AddTodoComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
