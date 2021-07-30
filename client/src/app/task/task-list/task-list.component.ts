import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks = [];
  @Input()
  public set dataList(v: any) {
    this.tasks = v;
  }

  public get dataList(): any {
    return this.tasks;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
