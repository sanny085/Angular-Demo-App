import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';
@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css'],
})
export class AddTodoComponent {
  title: string = '';
  description: string = '';
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();
  constructor() {}
  onSubmit = () => {
    if (this.title != '' && this.description != '') {
      const newTodo = {
        sno: Math.random() * 1000,
        title: this.title,
        desc: this.description,
        active: false,
      };
      this.addTodo.emit(newTodo);
    } else {
      alert('Please Enter a title and description');
    }
    this.title = '';
    this.description = '';
  };
}
