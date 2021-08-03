import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

const tasks = 'spak/tasks';
const task = 'spak/task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient
  ) { }

  // configure the tasks (create / update)
  setUpTask(task: any): Observable<any> {
    return this.http.post(`${tasks}`, task).pipe(map((res: any) => res.data));
  }

  // retrieve the tasks by used id
  retrieveTasks(id: number): Observable<any> {
    return this.http.get(`${tasks}/${id}`).pipe(map((res: any) => res.data));
  }

  // delete the specific task by id
  deleteTask(id: number): Observable<any> {
    return this.http.delete(`${task}/${id}`).pipe(map((res: any) => res.data));
  }

  sortByCompleteStatus(arr) {
    if (arr.length === 0){
      return [];
    }
    return arr.sort((a, b) => a.isCompleted - b.isCompleted);
  }
}
