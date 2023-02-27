import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../users.service";
import {User} from "../user";

@Component({
  selector: 'app-userform',
  templateUrl: './userForm.component.html',
  styleUrls: ['./userForm.component.css']
})
export class UserFormComponent implements OnInit {
  id!:number
  data!:any;
  users!:User[];

  constructor(private route: ActivatedRoute, private userService: UsersService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
    })
    this.getUsers();
    this.data=this.userService.userToEdit;
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  editUser(){
    this.data.name=(<HTMLInputElement>document.getElementById('name')).value;
    this.data.surname=(<HTMLInputElement>document.getElementById('surname')).value;
    this.data.username=(<HTMLInputElement>document.getElementById('username')).value;
    this.data.password=(<HTMLInputElement>document.getElementById('pass')).value;
    let indexToUpdate = this.users.findIndex(item => item.id === this.data.id);
    this.users[indexToUpdate] = this.data;
    this.users = Object.assign([], this.users);
  }

}
