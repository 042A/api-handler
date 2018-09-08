import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import { Mcdonalds } from './mcdonalds.model';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class McdonaldsService {
  private apiUrl = 'https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord=mc%20donalds&sida=1&antalrader=20';
  public userMcdonalds = [];
  constructor( private http: HttpClient ) {}

  getUser(): Observable<Mcdonalds[]> {
    const cjData = this.http.get(this.apiUrl);
    return cjData.pipe(map(res => res['matchningslista'].matchningdata));
  }

/*v2
  getUser(): Observable<Mcdonalds[]> {
    return this.http.get<Mcdonalds[]>(this.apiUrl);
  } */

/*v1
  getUser() {
    this.http.get(this.apiUrl, { responseType: 'json' }).subscribe(response => {
      console.log(response);
    });
    } */
}
