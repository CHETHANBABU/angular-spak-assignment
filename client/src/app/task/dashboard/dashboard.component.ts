import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskModel } from 'src/app/utils/models/task.model';
import { CommonService } from 'src/app/utils/services/common.service';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild('taskForm', { static: false }) taskForm: NgForm;

  model: TaskModel = new TaskModel();
  taskList = [];

  constructor(
    private taskService: TaskService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.taskService.retrieveTasks(this.commonService.getStorage.id).subscribe(res => {
      this.taskList = res;
    });
  }

  setUpTask() {
    const taskObj = {
      name: this.model.name,
      priority: 5,
      isDeleted: false,
      isCompleted: false,
      userId: this.commonService.getStorage.id
    };
    this.taskService.setUpTask(taskObj).subscribe(res => {
      this.taskList.push(res);
      this.taskForm.form.reset();
    });
  }

  clear() {
    this.taskForm.form.reset();
  }

}
