import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private usersService:UsersService, private router:Router) {
  }

  login(username:string, password:string){
    this.usersService.login(username, password).subscribe(response => {
      localStorage.setItem('token', response.value);
      localStorage.setItem('userId', String(response.id));
      localStorage.setItem('admin', String(response.admin));
      if (response.admin) {
        this.router.navigate(['users']);
      } else {
        this.router.navigate(['reservations', response.id]);
      }
    });
  }

}
