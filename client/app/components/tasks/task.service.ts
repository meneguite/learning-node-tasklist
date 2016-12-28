import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Task } from './task.model';

@Injectable()
export class TaskService {
  constructor (private http: Http) {
    console.log('Task Service Initialized..');
  }

  getTasks() {
    return this.http.get('/api/tasks').map(res => res.json());
  }

  addTask(task: Task) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('/api/task', JSON.stringify(task), { headers: headers})
      .map(res => res.json());
  }
}
