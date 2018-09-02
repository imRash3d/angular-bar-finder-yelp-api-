import { Component, OnInit } from "@angular/core";
import { HttpService } from "../modules/http-with-injector/http.service";
import { map, catchError } from "rxjs/operators";
import {  FormBuilder, FormGroup, Validators } from "@angular/forms";
import {  HomeService } from "./home-service.service";
import { of } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  form:FormGroup;
  loaded:any;
  loading:boolean;
  search_query:string;
  business:Business[]=[];
  constructor(
    private service:HomeService,
    private fb:FormBuilder,
    private route:ActivatedRoute,
    private router:Router,
    public auth:AuthService,
    private http: HttpService) {
      this.form=this.fb.group({
        search_area:['',[Validators.required]]
      });
      this.route.queryParams.subscribe(res => {
        this.search_query=res.search;
        if(res.search){
          this.getBars(this.search_query);
        }
       
   })
    }

  ngOnInit() {
  
   console.log()
  }

  submit() {
    console.log(this.form.getRawValue())
    this.loading= true;
    this.getBars()
  }

  getBars(query?) {
    let value ='';
    this.loading= true;
    if(query){
    value=query;
    } else {
    value=  this.form.get('search_area').value;
    }
    this.http
      .get('/businesses/search?term=bars&location='+value  )
      .pipe(
        map(res => {
          return res.businesses;
          
        }),catchError(err=>{
          return [];
        })
      )
      .subscribe(res => {
         res.forEach(element => {
           this.setCount(element.id).subscribe(res=>{
            element['going']= res==null || res=='' || res ==undefined ?0:res;
          })
         });
         this.search_query=value;
        this.form.reset();
       this.business=res;
       this.loading= false;
       this.router.navigate([''],{queryParams:null});
      });
  }

  setCount(id){
  return this.service.getCount(id).pipe(map(res=>{
      return Object.values(res).toString();
   }),catchError(err=>{
    return of(null);
   }))
    

  }

  iamGoing(id){
    this.service.setGoing(id).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  navigate(){
  let obj={
    redirectUrl:'home',
    search:this.search_query
  }

   this.router.navigate(['/login'],{queryParams:obj});
}

}


export interface Business {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean,
  url: string;
  rating: number;
  going:number | string;
}