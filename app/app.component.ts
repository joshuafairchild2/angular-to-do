import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>Current focus: {{currentFocus}}</h3>
    <hr>
    <task-list></task-list>
    <div *ngIf='selectedTask'>
      <h3>{{selectedTask.description}}</h3>
      <p>Task complete? {{selectedTask.done}}</p>
      <h3>Edit Task</h3>
      <label>Enter Task Description:</label>
      <input [(ngModel)]="selectedTask.description">
      <label>Enter Task Priority (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
      <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)<br>
      <button (click)='finishEditing()'>Save changes</button>
    </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular';
  today = new Date();
  month = this.today.getMonth() + 1;
  day = this.today.getDate();
  year = this.today.getFullYear();

  selectedTask = null;

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishEditing() {
    this.selectedTask = null;
  }
}
