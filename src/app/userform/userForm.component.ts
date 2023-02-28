import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../services/users.service";
import {User} from "../user";

@Component({
  selector: 'app-userform',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.css']
})
export class UserFormComponent implements OnInit {
  id!:number
  user!:User;
  users!:User[];

  constructor(private route: ActivatedRoute, private userService: UsersService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
    })
    this.getUsers();
    this.userService.getUserById(this.id).subscribe(user => this.user = user);
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  post(user: any) {
    this.userService.updateUser(user);
  }

}
