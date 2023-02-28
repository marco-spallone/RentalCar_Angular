import {Component, Input, OnInit} from '@angular/core';
import {usersTableConfig} from "../config/table-config";
import {MyTableConfig} from "../table/table.component";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";
import {USERS} from "../mock/mock-users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  tableConfig!: MyTableConfig;
  users!:any[];


  constructor(private router: Router, private userService: UsersService) {
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  ngOnInit(): void{
    this.tableConfig=usersTableConfig;
  }

  action(user:any, action:string) {
    switch (action) {
      case 'edit':
        this.userService.getUserById(user.id);
        this.router.navigate(['editUser', user.id]);
        break;
      case 'post':
        this.userService.updateUser(user);
        break;
      case 'delete':
        this.userService.deleteUser(user);
        break;
      default:
        break;
    }
  }
}
