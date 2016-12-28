import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: `tasks.component.html`,
  providers: [ TaskService ]
})
export class TasksComponent  {
  tasks: Task[];
  title: string;

  constructor(private taskService: TaskService) {
    this.taskService.getTasks()
      .subscribe(tasks => {
        this.tasks = tasks;
      })
  }

  addTask(event: Event) {
    event.preventDefault();
    console.log(this.title);
  }
}
