import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
form:FormGroup;
errormessage:string;
  constructor(private fb:FormBuilder , 
    private service:AuthService,
    private route:ActivatedRoute,
    private router:Router,
  ) {
    this.form = this.fb.group({
      email:['',Validators.required],
      password:['',Validators.required],
      confpassword:['',Validators.required],
    })
    this.route.queryParams.subscribe(res => {
       console.log(res.redirectTo);
  })
   }

  ngOnInit() {
  }
submit(){
  this.service.signUp(this.form.get('email').value,this.form.get('password').value )
  .then(res=>{
    this.service.saveUser();
    this.router.navigate(['']);
  }).catch(err=>{
    this.errormessage=err.message;
    setTimeout(()=>{
      this.errormessage=null;
    },2000)
  })
 console.log( this.form.getRawValue())
}
}
