import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { login } from '../Models/login.model';
import { UserComponent } from '../user/user.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  
  CheckUser(user:login){
   // debugger;
    return this.http.get('http://localhost:59696/api/User?email='+user.Email+'&password='+user.Password);
  }

}
