import {Component, OnInit} from '@angular/core';
import {usersTableConfig} from "../config/table-config";
import {MyTableActionsEnum, MyTableConfig} from "../table/table.component";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";
import {User} from "../user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  tableConfig!: MyTableConfig;
  users!:User[];


  constructor(private router: Router, private userService: UsersService) {
  }

  ngOnInit(){
    this.tableConfig=usersTableConfig;
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  action(user:User, action:MyTableActionsEnum) {
    switch (action) {
      case MyTableActionsEnum.EDIT:
        this.router.navigate(['editUser', user.id]);
        break;
      case MyTableActionsEnum.DELETE:
        this.userService.deleteUser(user);
        this.userService.getUsers().subscribe(users => this.users = users)
        console.log(this.users);
        break;
      default:
        break;
    }
  }
}
