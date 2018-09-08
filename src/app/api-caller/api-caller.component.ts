import { Component} from '@angular/core';
import { Todo, ApiCallService } from '../api-call/api-call.service';
import { throwError } from 'rxjs';  // Updated for Angular 6/RxJS 6

export interface Todo {
  userId: string;
  id: string;
}



@Component({
  selector: 'app-api-caller',
  templateUrl: './api-caller.component.html',
  styleUrls: ['./api-caller.component.css']
})


export class ApiCallerComponent {
  error: any;
  headers: string[];
  todos: Todo[];

  constructor(private apiCallService: ApiCallService) {}

  ngOnInit() {
    this.showTodos();
    console.log('data ' + this.todos);
  }

  showTodos(): void {
    console.log('Kör showTodos');
    this.apiCallService.getTodos()
      .subscribe(todos => this.todos = todos
    );
  }
}
