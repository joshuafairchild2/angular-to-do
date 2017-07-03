import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <ul>
    <li *ngFor="let task of tasks" [class]='priorityColor(task)'>{{task.description}}  <button (click)='editTask(task)' class='btn btn-xs'>Edit</button></li>
  </ul>
  `
})

export class TaskListComponent {
  tasks: Task[] = [
    new Task('Finish angular homework', 2),
    new Task('Work on other things', 1),
    new Task('Stop working on things', 3)
  ]

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
