import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderModule } from '../modules/loader/loader.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeService } from './home-service.service';
import { AuthService } from '../auth/auth.service';
export const routes:Routes =[
  {
    path:'',
    component:HomeComponent
  },
 
]
@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent],
  providers:[HomeService, AuthService]
})
export class HomeModule { }
