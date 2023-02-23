import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {USERS} from "../mock-users";
import {editButtonConfig, deleteButtonConfig, viewResButtonConfig} from "../button/button/config/button-config";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  users: User[] = USERS;
  editButtonConfig=editButtonConfig;
  deleteButtonConfig=deleteButtonConfig;
  viewResButtonConfig=viewResButtonConfig;

  ngOnInit(): void{

  }
}
