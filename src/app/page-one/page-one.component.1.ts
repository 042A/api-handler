import { Component } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AddObjectComponent } from '../add-object/add-object.component';

export interface Items {
  userid: string;
}

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})

export class PageOneComponent {
  private name: string;
  public items: Observable<any[]>;

  constructor(db: AngularFirestore) {
    this.items = db.collection('/items').valueChanges();

  }

  addTodo() {
  }

}

