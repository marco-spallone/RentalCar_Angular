import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {editButtonConfig, deleteButtonConfig, viewResButtonConfig} from "../button/config/button-config";
import {Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {CarsService} from "../services/cars.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @Input() tableConfig!: MyTableConfig;
  @Input() data!: any[];
  @Output() newItemEvent = new EventEmitter<any>();
  filtered!: any[];
  editButtonConfig=editButtonConfig;
  deleteButtonConfig=deleteButtonConfig;
  viewResButtonConfig=viewResButtonConfig;

  constructor(public router: Router) {
  }
  ngOnInit(): void {
    this.filtered=this.data;
  }

  applyFilter(searchFor: string, searchValue: string) {
    this.filtered = this.data.filter((i: any) => i[searchFor.toLowerCase()].toString().toLowerCase().includes(searchValue.toLowerCase()));
  }

  getEvent(whichTable:string, data:any[], entity: any, action:string) {
    this.newItemEvent.emit({whichTable:whichTable, data: data, entity:entity, action: action});
  }

}


export class MyTableConfig {
  whichTable:string;
  headers: MyHeaders[];
  search: MySearch;


  constructor(headers: MyHeaders[], search:MySearch, whichTable:string) {
    this.whichTable=whichTable;
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
