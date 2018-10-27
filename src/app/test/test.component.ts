import { Component, OnInit } from '@angular/core';
import {Role} from '../role';
import {RoleService} from '../role.service'

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  msg = 'text msg';

  num1;
  num2;

  ans:number;

  roles:Role[];

  roleObj = new Role();

  deleteRoleObj:Role;

  constructor(private roleService:RoleService){ }

  addNumber() {
    this.ans = parseInt(this.num1)+parseInt(this.num2);
    // alert(this.num1+this.num2)
    //console.log(ans)
  }

  ngOnInit(){
    this.viewRole();
  }

  viewRole(){
    this.roleService.getRole().subscribe(data=>{
      this.roles=data;
      console.log(data);
    })
  }

  createRole(){
    this.roleService.addRole(this.roleObj).subscribe(data=>{
      this.msg="created";
      this.viewRole();
      this.clear();
    })
  }

  updateRole(){
    this.roleService.editRole(this.roleObj).subscribe(data=>{
      // alert("updated");
      this.msg="Edited";
      this.viewRole();
      this.clear();
    })
  }

  editRole(role){
    this.roleObj=Object.assign({},role);
  }

  deleteRole(){
    this.roleService.deleteRole(this.deleteRoleObj).subscribe(data=>{
      this.msg="deleted";
      this.viewRole();
    })
  }

  clear(){
    this.roleObj.id = null;
    this.roleObj.roleName = "";
  }

  getRoleForeDelete(role){
    this.deleteRoleObj=role;
  }

}
