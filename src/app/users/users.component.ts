import {Component, Input, OnInit} from '@angular/core';
import {User} from "../user";
import {USERS} from "../mock-users";
import {editButtonConfig, deleteButtonConfig, viewResButtonConfig} from "../button/config/button-config";
import {usersTableConfig} from "../config/table-config";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  @Input() tableConfig: MyTableConfig = usersTableConfig;
  @Input() users!: any[];
  filtered: any[] = [];
  editButtonConfig=editButtonConfig;
  deleteButtonConfig=deleteButtonConfig;
  viewResButtonConfig=viewResButtonConfig;

  ngOnInit(): void{
    this.filtered = this.users;
  }

  applyFilter(searchFor: string, searchValue: string) {
    this.filtered = this.users.filter((i: any) => i[searchFor.toLowerCase()].toString().toLowerCase().includes(searchValue.toLowerCase()))
  }
}

export class MyTableConfig {
  headers: MyHeaders[];
  search: MySearch;


  constructor(headers: MyHeaders[], search:MySearch) {
    this.headers = headers;
    this.search=search;
  }
}

export class MyHeaders {
  label: string;
  key: string;

  constructor(label: string, key: string) {
    this.label = label;
    this.key = key;
  }
}

export class MySearch{
  columns: string[];

  constructor(columns: string[]) {
    this.columns = columns;
  }
}
