import {Component, OnInit} from '@angular/core';
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  constructor(private usersService: UsersService, private router: Router) {
  }

  ngOnInit() {
    console.log(localStorage.getItem('token'));
  }

  login(username: string, password: string) {
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

  canDeactivate(): Observable<boolean> | boolean {
    return false;
  }

}
