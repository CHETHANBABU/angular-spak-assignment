import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks = [];
  // tslint:disable-next-line:no-output-on-prefix
  @Output() actionEvent = new EventEmitter<any>();
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

  onEventClick(task, type) {
    this.actionEvent.emit({ data: task, type });
  }

}
