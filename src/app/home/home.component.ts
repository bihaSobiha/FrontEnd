import { Component, OnInit } from '@angular/core';
import { InteractionService } from '../UserService/interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private interaction:InteractionService) { }

  ngOnInit() {
  }

  logOut(){
    this.interaction.sendLoginStatus(false);
  }

}
