import { Component, OnInit } from '@angular/core';
import { InteractionService } from './UserService/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  isLogin:boolean=false;
  // role:String;
  constructor(private interaction:InteractionService,private router:Router ) { }
  ngOnInit(){
    this.interaction.isLogined$.subscribe(data =>{
      this.isLogin=data;
    });
    this.interaction.loginUserDataSource$.subscribe(data =>{
      if(data.userRole==="Admin"){
        this.router.navigate(['admin']);
      }
      else{
        this.router.navigate(['user']);
      }
    });
  }  
}
