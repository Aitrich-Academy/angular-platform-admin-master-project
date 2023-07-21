import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRegistrationComponent } from './components/new-registration/new-registration.component';
import { NewRegistrationHomeComponent } from './components/new-registration-home/new-registration-home.component';



@NgModule({
  declarations: [
    NewRegistrationComponent,
    NewRegistrationHomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewRegistrationsModule { }
