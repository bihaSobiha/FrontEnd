import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  private baseUrl="http://localhost:8080/hrm_system/login";

  public getLogin(login:Login){
    return this.http.post(this.baseUrl,login);
  }
}
