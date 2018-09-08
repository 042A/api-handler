import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

export interface Todo {
  userId: string;
  id: string;
  title: string;
  compleded: boolean;
}


@Injectable()

export class ApiCallService {
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    console.log('Kör getTodos');
      return this.http.get<Todo[]>(this.apiUrl)
      .pipe(
        retry(3),

      );
  }



}
