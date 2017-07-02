import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>Current focus: {{currentFocus}}</h3>
    <ul>
      <li *ngFor="let task of tasks" (click)='isDone(task)' [class]='priorityColor(task)'>{{task.description}}  <button (click)='editTask()' class='btn btn-xs'>Edit</button></li>
    </ul>
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

  editTask() {
    alert('edit success');
  }

  isDone(task) {
    task.done ? alert('Task is complete') : alert('Task not yet completed');
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
  constructor(public description: string, public priority: number) {}
}
