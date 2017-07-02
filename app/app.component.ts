import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>Current focus: {{currentFocus}}</h3>
    <ul>
      <li *ngFor="let task of tasks">{{task.description}}</li>
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
    new Task('Finish angular homework'),
    new Task('Work on other things'),
    new Task('Stop working on things')
  ];
}

export class Task {
  public done: boolean = false;
  constructor(public description: string) {}
}
