import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(  private fireAuth: AngularFireAuth,) { }
    signUp(email,password){
      return  this.fireAuth.auth.createUserWithEmailAndPassword(email,password);
    }
    signIn(email,password){
        return  this.fireAuth.auth.signInWithEmailAndPassword(email,password);
      }

      saveUser(){
        localStorage.setItem('is_login','true');
      }

      get is_Login () {
          return  localStorage.getItem('is_login');
      }
}
