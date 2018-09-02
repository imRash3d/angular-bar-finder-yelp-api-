import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
export const routes:Routes =[
    {
      path:'',
      loadChildren:'./home/home.module#HomeModule'
    },
    {
      path:'login',
      loadChildren:'./auth/login/login.module#LoginModule'
    },
    {
      path:'registration',
      loadChildren:'./auth/registration/registration.module#RegistrationModule'
    },
    {
      path:'**',
      redirectTo:'/'
    }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
