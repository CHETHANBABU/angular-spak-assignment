import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaserouteComponent } from './baseroute/baseroute.component';
import { TaskRoutingModule } from './task-routing.module';
import { UtilsModule } from '../utils/utils.module';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [DashboardComponent, BaserouteComponent, TaskListComponent],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    TaskRoutingModule,
    UtilsModule
  ]
})
export class TaskModule { }
