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
  valid:boolean=true;

  constructor(private route: ActivatedRoute, private userService: UsersService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
    })
    this.userService.getUserById(this.id).subscribe(user => this.user = user);
  }

  post(user: User) {
    if(user.username.length>=8 && user.password.length>=8 && user.name!='' && user.surname!=''){
      this.userService.updateUser(user);
      this.valid=true;
    } else {
      this.valid=false;
    }
  }

}
