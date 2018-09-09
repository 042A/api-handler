import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

  /* Docs: https://jobtechdev.se/apidatasets/platsbanken */
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 @Component({
  selector: 'app-data-table2',
  templateUrl: './data-table2.component.html',
  styleUrls: ['./data-table2.component.css']
})

export class DataTable2Component implements OnInit {
  displayedColumns: string[] = ['annonsid', 'yrkesbenamning', 'arbetsplatsnamn', 'kommunnamn'];
  apiUrl = 'https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning?nyckelord=mc%20donalds&sida=1&antalrader=20';
  mcdonalds: Matchningsdata[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getMcDonalds();
  }

  getMcDonalds(): void {
    const href = 'https://api.arbetsformedlingen.se/af/v0/platsannonser/matchning';
    const requestUrl =
    `${href}?nyckelord=mc%20donalds&sida=1&antalrader=40`;
    /* const requestUrl = this.apiUrl; */
    const httpFunction = this.http.get(requestUrl);
    const subscribe = httpFunction.subscribe(val => console.log(val));
    const subscribe2 = httpFunction
     .pipe(map(res => res['matchningslista'].matchningdata))
     .subscribe(mcdonalds => this.mcdonalds = mcdonalds);

  } }

export class AfApi {
  matchningslista: {
    antal_platsannonser:	number;
    antal_platsannonser_exakta:	number;
    antal_platsannonser_narliggande:	number;
    antal_platserTotal:	number;
    antal_sidor: number;
    matchningsdata: Matchningsdata[];
  }; }
export class Matchningsdata {
  annonsid:	string;
  annonsrubrik:	string;
  yrkesbenamning:	string;
  yrkesbenamningId:	number;
  arbetsplatsnamn:	string;
  kommunnamn:	string;
  kommunkod:	number;
  publiceraddatum: string;
  sista_ansokningsdag:	string;
  annonsurl:	string;
  relevans: number;
  antalplatse:	string;
  antalPlatserVisa:	number;
  varaktighetId:	number;
  lanid: number;
  lan:	string;
  anstallningstyp: string;
  }

