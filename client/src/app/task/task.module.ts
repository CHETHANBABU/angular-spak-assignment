import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BaserouteComponent } from './baseroute/baseroute.component';
import { TaskRoutingModule } from './task-routing.module';
import { UtilsModule } from '../utils/utils.module';

@NgModule({
  declarations: [DashboardComponent, BaserouteComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    UtilsModule
  ]
})
export class TaskModule { }
