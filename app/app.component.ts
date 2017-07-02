import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class='container'>
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>Current focus: {{currentFocus}}</h3>
    <ul>
      <li>{{firstTask.description}}</li>
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
  firstTask = {
    description: 'Finish angular work'
  }
}
