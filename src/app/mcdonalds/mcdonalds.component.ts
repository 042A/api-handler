import { Component, OnInit } from '@angular/core';
import { McdonaldsService } from './mcdonalds.service';
import { Mcdonalds } from './mcdonalds.model';

@Component({
  selector: 'app-mcdonalds',
  templateUrl: './mcdonalds.component.html',
  styleUrls: ['./mcdonalds.component.css']
})
export class McdonaldsComponent implements OnInit {
  mcdonalds: Mcdonalds[];
/* Docs: https://jobtechdev.se/apidatasets/platsbanken */
  constructor( private mcDonaldsService: McdonaldsService ) { }

  ngOnInit() {
    this.getMcdonalds();
  }

  getMcdonalds(): void {
     this.mcDonaldsService.getUser()
    .subscribe(mcdonalds => this.mcdonalds = mcdonalds);
  }

}
