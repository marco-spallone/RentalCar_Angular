import { Component } from '@angular/core';
import {UsersService} from "../services/users.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private usersService:UsersService) {
  }

  login(username:string, password:string){
    this.usersService.login(username, password);
  }

}
