import { Component } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todo: Todo[];
  getTodo: string | null;

  constructor() {
    this.getTodo = localStorage.getItem('todo');
    if (this.getTodo === null) {
      this.todo = [];
    } else {
      this.todo = JSON.parse(this.getTodo);
    }
  }

  onDelete = (todo: Todo) => {
    const getUserIndex = this.todo.indexOf(todo);
    this.todo.splice(getUserIndex, 1);
    localStorage.setItem('todo', JSON.stringify(this.todo));
  };
  onAddTodo = (newtodo: Todo) => {
    this.todo.push(newtodo);
    localStorage.setItem('todo', JSON.stringify(this.todo));
  };
  onUpdateTodoStatus = (currentTodo: Todo) => {
    this.todo = this.todo.map((todo) => {
      if (todo.sno === currentTodo.sno) {
        return { ...todo, active: !todo.active };
      } else {
        return todo;
      }
    });
    localStorage.setItem('todo', JSON.stringify(this.todo));
  };
}
