import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Role } from './role';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  private roleUrl = "http://localhost:8080/hrm_system/role";

  public getRole(){
    return this.http.get<Role[]>(this.roleUrl);
  }

  public addRole(role){
    return this.http.post<Role>(this.roleUrl,role)
  }

  public editRole(role){
    return this.http.put<Role>(this.roleUrl +'/'+ role.id,role)
  }

  public deleteRole(role){
    return this.http.delete<Role>(this.roleUrl +'/'+ role.id)
  }
  
}
