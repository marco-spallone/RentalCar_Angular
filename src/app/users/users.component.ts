import {Component, OnInit} from '@angular/core';
import {usersTableConfig} from "../config/table-config";
import {MyTableActionsEnum, MyTableConfig} from "../table/table.component";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";
import {User} from "../interfaces/user";

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
    this.userService.getUsers().subscribe(users => this.users = users.filter(item => !item.isAdmin));
    this.tableConfig=usersTableConfig;
  }

  action(user:User, action:MyTableActionsEnum) {
    switch (action) {
      case MyTableActionsEnum.NEW_ROW:
        this.router.navigate(['addUser', action]);
        break;
      case MyTableActionsEnum.EDIT:
        this.router.navigate(['editUser', user.id, action]);
        break;
      case MyTableActionsEnum.DELETE:
        this.userService.deleteUser(user).subscribe(() => {
          this.userService.getUsers().subscribe(users => this.users = users.filter(item => !item.isAdmin));
        });
        break;
      case MyTableActionsEnum.VIEW_RES:
        this.router.navigate(['reservations', user.id]);
        break;
      default:
        break;
    }
  }
}
