import {Component, Input, OnInit} from '@angular/core';
import {usersTableConfig} from "../config/table-config";
import {MyTableConfig} from "../table/table.component";
import {USERS} from "../mock-users";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  tableConfig!: MyTableConfig;
  data!: any[];
  filtered: any[] = [];

  ngOnInit(): void{
    this.tableConfig=usersTableConfig;
    this.data=USERS;
    this.filtered = this.data;
  }


}
