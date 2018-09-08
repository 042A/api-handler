import { TaskService } from './app.service';
import { config } from './app.config';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './app.model';
import { AngularFirestore } from 'angularfire2/firestore';
import { from } from 'rxjs';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';




@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})

export class PageOneComponent implements OnInit {
  title = 'My Todo App';
  myTask: string;
  tasks: Observable<any[]>;
  editMode = false;
  taskToEdit: any = {};

  constructor(private db: AngularFirestore, private taskService: TaskService) {}

  ngOnInit() {
    // this.tasks = this.db.collection(config.collection_endpoint).valueChanges();

    // Detect collection changes and add the 'id' metadata for document manipulation
    this.tasks = this.db
      .collection(config.collection_endpoint)
      .snapshotChanges()
      .pipe(map(actions => {
        return actions.map(a => {
          // Get document data
          const data = a.payload.doc.data() as Task;

          // Get document id
          const id = a.payload.doc.id;

          // Use spread operator to add the id to the document data
          return { id, ...data };
        });
      }));

    console.log(this.tasks);
  }

  edit(task) {
    console.log(task);

    // Set taskToEdit and editMode
    this.taskToEdit = task;
    this.editMode = true;

    // Set form value
    this.myTask = task.description;
  } // edit

  saveTask() {
    if (this.myTask !== null) {
      // Get the input value
      const task = {
        description: this.myTask
      };

      if (!this.editMode) {
        console.log(task);
        this.taskService.addTask(task);
      } else {
        // Get the task id
        const taskId = this.taskToEdit.id;

        // update the task
        this.taskService.updateTask(taskId, task);
      }

      // set edit mode to false and clear form
      this.editMode = false;
      this.myTask = '';
    }
  } // saveTask

  deleteTask(task) {
    // Get the task id
    let taskId = task.id;

    // delete the task
    this.taskService.deleteTask(taskId);
  } // deleteTask
}
