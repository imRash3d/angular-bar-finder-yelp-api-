import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private url='https://barfinder-10624.firebaseio.com/business/'
  constructor(private http:HttpClient) { }

getCount(id){
 
return  this.http.get(this.url+id+'.json')
}

async setGoing(id){
  let count=0;
await  this.getCount(id).subscribe(res=>{
  count= res?  Number(Object.values(res).toString()):0;
  return    this.http.put(this.url+id+'/going.json',count+1);
  })


}


}
