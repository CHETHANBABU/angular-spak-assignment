import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

const tasks = 'spak/tasks';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  setUpTask(task: any): Observable<any> {
    return this.http.post(`${tasks}`, task).pipe(map((res: any) => res.data));
  }

  retrieveTasks(id: number): Observable<any> {
    return this.http.get(`${tasks}/${id}`).pipe(map((res: any) => res.data));
  }
}
