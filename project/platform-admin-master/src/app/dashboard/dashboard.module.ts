import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardHomeComponent } from './components/dashboard-home/dashboard-home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardRoutingModule } from './routes/dashboard-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';



@NgModule({
  declarations: [
    DashboardHomeComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
