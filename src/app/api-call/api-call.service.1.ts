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
  apiUrl = 'https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord=mc%20donalds&sida=1&antalrader=20';

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    console.log('Kör getTodos');
    console.log(this.apiUrl);
      return this.http.get<Todo[]>(this.apiUrl)
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  makeIntentionalError() {
    return this.http.get('not/a/real/url')
      .pipe(
        catchError(this.handleError)
      );
  }


}
