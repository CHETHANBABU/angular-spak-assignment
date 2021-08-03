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
  taskData: string;
  constructor(
    private taskService: TaskService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.taskService.retrieveTasks(this.commonService.getStorage.id).subscribe(res => {
      this.taskList = (res.length === 0) ? [] : this.taskService.sortByCompleteStatus(res);
    });
  }

  // set up the tasks
  setUpTask() {
    const taskObj: any = {
      name: this.taskData,
      priority: 5,
      isDeleted: false,
      isCompleted: false,
      userId: this.commonService.getStorage.id
    };
    // check for the task id
    if (this.model.id) {
      taskObj.id = this.model.id;
    }
    this.taskService.setUpTask(taskObj).subscribe(res => {
      if (taskObj.id) {
        const index = this.taskList.findIndex(item => item.id === res.id);
        // Replace the item by index.
        this.taskList.splice(index, 1, res);
      } else {
        this.taskList.push(res);
        this.taskList = this.taskService.sortByCompleteStatus(this.taskList);
      }
      this.taskForm.form.reset();
    });
  }

  clear() {
    this.model = new TaskModel();
  }

  // performing the action event by type
  actionEvent(ev) {
    switch (ev.type) {
      case 'edit':
        this.model = ev.data;
        this.taskData = this.model.name;
        break;
      case 'delete':
        this.model = ev.data;
        this.deleteTask();
        break;
      case 'complete':
        this.model = ev.data;
        this.taskComplete();
        break;
      default:
        break;
    }
  }

  // modifying the task completion for the list
  taskComplete() {
    const taskObj: any = { ...this.model };
    taskObj.isCompleted = true;
    this.taskService.setUpTask(taskObj).subscribe(res => {
      if (res.id) {
        const index = this.taskList.findIndex(item => item.id === res.id);
        // Replace the item by index.
        this.taskList.splice(index, 1);
        this.taskList.push(res);
        this.taskList = this.taskService.sortByCompleteStatus(this.taskList);
      }
    });
  }

  // delete the task from list
  deleteTask() {
    this.taskService.deleteTask(this.model.id).subscribe(res => {
      const index = this.taskList.findIndex(item => item.id === res);
      // Replace the item by index.
      this.taskList.splice(index, 1);
    });
  }
}
