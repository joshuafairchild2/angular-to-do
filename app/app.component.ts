import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>Current focus: {{currentFocus}}</h3>
    <ul>
      <li *ngFor="let task of tasks" [class]='priorityColor(task)'>{{task.description}}  <button (click)='editTask(task)' class='btn btn-xs'>Edit</button></li>
    </ul>
    <hr>
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
  tasks: Task[] = [
    new Task('Finish angular homework', 2),
    new Task('Work on other things', 1),
    new Task('Stop working on things', 3)
  ];
  selectedTask = null;

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  isDone(task) {
    task.done ? alert('Task is complete') : alert('Task not yet completed');
  }

  finishEditing() {
    this.selectedTask = null;
  }

  priorityColor(task) {
    if(task.priority === 3) {
      return 'bg-danger';
    } else if(task.priority === 2) {
      return 'bg-warning';
    } else if(task.priority === 1) {
      return 'bg-info';
    }
  }
}

export class Task {
  public done: boolean = false;
  constructor(
    public description: string,
    public priority: number
  ) {}
}
