import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heros';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero;
  selected;

  constructor(public dialog: MatDialog) {}
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.selected = 1;
  }

  onBack(): void {
    this.selected = 0;
  }

  ngOnInit() {
  }

}
