import {Component, Input, OnInit} from '@angular/core';
import {editButtonConfig, deleteButtonConfig, viewResButtonConfig} from "../button/config/button-config";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @Input() tableConfig!: MyTableConfig;
  @Input() data!: any[];
  @Input() filtered!:any[];
  editButtonConfig=editButtonConfig;
  deleteButtonConfig=deleteButtonConfig;
  viewResButtonConfig=viewResButtonConfig;

  ngOnInit(): void {
  }

  applyFilter(searchFor: string, searchValue: string) {
    this.filtered = this.data.filter((i: any) => i[searchFor.toLowerCase()].toString().toLowerCase().includes(searchValue.toLowerCase()));
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
