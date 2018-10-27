import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Login } from '../login';
import { InteractionService } from '../UserService/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login =new Login();
// login:Login;
  constructor(private loginService:LoginService, private interaction:InteractionService,private router:Router) { }

  ngOnInit() {
    // this.login.userName='xyz';
    // this.login.password='1234';
    // this.loginService.getLogin(this.login).subscribe(data =>{
    //   console.log(data);
    // });
    this.interaction.loginUserDataSource$.subscribe(data =>{
      console.log(data)
    });
  }

  getLoginAuth(){
    this.loginService.getLogin(this.login).subscribe(data =>{
      // console.log(data);
      if(data!=null){
        this.interaction.sendLoginedData(data);
        this.interaction.sendLoginStatus(true);
        // this.router.navigate(['home']);
        // console.log(data);
      }
    });
  }


}
