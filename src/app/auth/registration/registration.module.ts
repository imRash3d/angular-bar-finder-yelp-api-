import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
export const routes:Routes =[
  {
    path:'',
    component:RegistrationComponent
  },
 
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[AuthService],
  declarations: [RegistrationComponent]
})
export class RegistrationModule { }
