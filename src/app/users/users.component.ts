import {Component, Input, OnInit} from '@angular/core';
import {usersTableConfig} from "../config/table-config";
import {MyTableConfig} from "../table/table.component";
import {UsersService} from "../services/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  tableConfig!: MyTableConfig;
  users!: any[];
  filtered: any[] = [];


  constructor(private router: Router, private userService: UsersService) {
  }

  ngOnInit(): void{
    this.tableConfig=usersTableConfig;
    this.getUsers();
    this.filtered = this.users;
  }

  getUsers(): void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  action(whichTable:string, users:any[], user:any, action:string){
    if(whichTable==='users'){
      switch (action){
        case 'edit':
          this.userService.getUserById(users, user.id);
          this.router.navigate(['editUser', user.id]);
          break;
        case 'post':
          this.userService.updateUser(this.users, user);
          break;
        case 'delete':
          this.userService.deleteUser(this.filtered, user);
          break;
        default:
          break;
      }
    }
  }


}
