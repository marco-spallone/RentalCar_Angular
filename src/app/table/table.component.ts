import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {editButtonConfig, deleteButtonConfig, viewResButtonConfig} from "../button/config/button-config";
import {Router} from "@angular/router";
import {UsersService} from "../services/users.service";
import {CarsService} from "../services/cars.service";
import {MyButtonConfig} from "../button/button.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @Input() tableConfig!: MyTableConfig;
  @Input() data!: any[];
  @Output() newItemEvent = new EventEmitter<any>();
  filtered!:any[];

  constructor() {
  }
  ngOnInit(): void {
    this.filtered=this.data;
  }

  applyFilter(searchFor: string, searchValue: string) {
    this.filtered = this.data.filter((i: any) => i[searchFor.toLowerCase()].toString().toLowerCase().includes(searchValue.toLowerCase()));
  }

  getEvent(entity: any, action:MyTableActionsEnum) {
    this.newItemEvent.emit({entity:entity, action: action});
  }

}


export class MyTableConfig {
  headers: MyHeaders[];
  search: MySearch;
  actions:MyTableAction[];


  constructor(headers: MyHeaders[], search:MySearch, actions:MyTableAction[]) {
    this.headers = headers;
    this.search=search;
    this.actions=actions;
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

export enum MyTableActionsEnum{
  NEW_ROW = 'Aggiungi',
  EDIT = 'Modifica',
  VIEW_RES = 'Visualizza',
  DELETE = 'Elimina'
}

export class MyTableAction{
  actionEnum:MyTableActionsEnum;
  buttonStyle:MyButtonConfig;


  constructor(actionEnum: MyTableActionsEnum, buttonStyle: MyButtonConfig) {
    this.actionEnum = actionEnum;
    this.buttonStyle = buttonStyle;
  }
}
