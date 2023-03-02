import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {User} from "../user";
import {Location} from "@angular/common";

@Component({
  selector: 'app-userform',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.css']
})
export class UserFormComponent implements OnInit {
  id!:number;
  user!:User;
  users!:User[];
  valid:boolean=true;

  constructor(private route: ActivatedRoute, private router:Router, private userService: UsersService, private location:Location) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
    })
    this.userService.getUserById(this.id).subscribe(user => this.user = user);
  }

  post(user: User) {
    if(user.username.length>=8 && user.password.length>=8 && user.name!='' && user.surname!=''){
      this.userService.updateUser(user).subscribe(() => {
        this.userService.getUsers().subscribe(users => this.users = users);
        this.router.navigate(['users'])
      });
      this.valid=true;
    } else {
      this.valid=false;
    }
  }

}
