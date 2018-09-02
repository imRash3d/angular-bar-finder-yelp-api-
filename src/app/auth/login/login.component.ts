import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  redirectUrl:any;
  form:FormGroup;
  errormessage:string;
  constructor(
    private service:AuthService,
    private route:ActivatedRoute,
    private router:Router,
    private fb:FormBuilder
  ) { 
    this.form = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
    });
    this.route.queryParams.subscribe(res => {
      this.redirectUrl=res;
      console.log(this.redirectUrl)
 })
  }

  ngOnInit() {
  }
  submit(){
    this.service.signIn(this.form.get('email').value,this.form.get('password').value )
    .then(res=>{
      this.service.saveUser();
     this.router.navigate([''],{queryParams:this.redirectUrl})
    }).catch(err=>{
      this.errormessage=err.message;
      setTimeout(()=>{
        this.errormessage=null;
      },2000)
    })
   console.log( this.form.getRawValue())
  }
}
