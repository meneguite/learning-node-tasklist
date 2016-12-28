import { Component } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: `tasks.component.html`,
  styleUrls: ['tasks.component.css'],
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
    let newTask: Task = {
      title: this.title,
      isDone: false
    };

    this.taskService.addTask(newTask)
      .subscribe(task => {
        this.tasks.push(task);
        this.title = '';
      });

  }

  deleteTask(taskId: string) {
    this.taskService.deleteTask(taskId)
      .subscribe(data => {
          if (data.n == 1) {
            this.tasks =  this.tasks.filter(function (task) {
              return task._id != taskId
            });
          }
      });
  }

  updateStatus(task: Task) {
    let _task: Task = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    };

    this.taskService.updateTask(_task).subscribe(res => {
      task = res;
    });
  }

}
