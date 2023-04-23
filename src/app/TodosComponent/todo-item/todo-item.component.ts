import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  @Input() index: number;
  @Input() todo: Todo;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() updateTodoStatus: EventEmitter<Todo> = new EventEmitter();

  onClick = (todo: Todo) => {
    this.todoDelete.emit(todo);
  };
  updateStatus = (currentTodo: Todo) => {
    this.updateTodoStatus.emit(currentTodo);
  };
}
