import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private router:Router) { }
  sendToken(token:string){
    localStorage.setItem('login Details',token);
  }
  get(){
    return localStorage.getItem('username');
  }
  islogged(){
    this.get()!=null;
  }
  logout(){
    localStorage.removeItem('username');
    this.router.navigate(['/user/login'])
  }
}
