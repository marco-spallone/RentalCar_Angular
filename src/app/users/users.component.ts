import {Component, OnInit} from '@angular/core';
import {usersTableConfig} from "../config/table-config";
import {MyTableActionsEnum, MyTableConfig} from "../table/table.component";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";

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

  action(user:any, action:MyTableActionsEnum) {
    switch (action) {
      case MyTableActionsEnum.EDIT:
        this.router.navigate(['editUser', user.id]);
        break;
      case MyTableActionsEnum.DELETE:
        this.userService.deleteUser(user);
        break;
      default:
        break;
    }
  }
}
