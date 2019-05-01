import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { register } from '../Models/register.model';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

const httpOptions={
  headers:new HttpHeaders({'content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  RegisterUser(person: register){

    //let body=JSON.stringify(person);

    return this.http.post('http://localhost:59696/api/User',person);
  }
}
