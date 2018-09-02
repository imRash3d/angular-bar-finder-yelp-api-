import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
export const routes:Routes =[
  {
    path:'',
    component:LoginComponent
  },
 
]
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule
  ],
  providers:[AuthService],
  declarations: [LoginComponent]
})
export class LoginModule { }
