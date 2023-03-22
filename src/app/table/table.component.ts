import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {nextButtonConfig, prevButtonConfig} from "../config/button-config";
import {MyButtonConfig} from "../button/button.component";
import {faHashtag} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() tableConfig!: MyTableConfig;
  @Input() data!: any[];
  @Output() newItemEvent = new EventEmitter<any>();
  filtered!: any[];
  order!: string;
  column!: string;
  page: number = 1;
  maxPages!: number;
  iterableMaxPages!: Array<any>;
  pageButtonConfig!: MyButtonConfig;
  prevButtonConfig = prevButtonConfig;
  nextButtonConfig = nextButtonConfig;

  constructor() {
  }

  ngOnInit(): void {
    this.filtered = this.data;
    this.order = this.tableConfig.order.orderType;
    this.sort(this.tableConfig.order.defaultColumn);
  }

  ngOnChanges() {
    this.filtered = this.data;
    this.onItemPerPageChange();
  }

  sort(column: string) {
    this.column = column;
    this.page = 1;
    if (this.order === 'desc') {
      this.order = 'asc';
    } else {
      this.order = 'desc';
    }
  }

  onItemPerPageChange() {
    if (this.filtered != null) {
      this.maxPages = this.filtered.length / this.tableConfig.pagination.itemPerPage;
      if (this.maxPages % 1 === 0) {
        this.iterableMaxPages = new Array(Math.floor(this.maxPages)).fill(this.maxPages).map((x, i) => i);
      } else {
        this.iterableMaxPages = new Array(Math.floor(this.maxPages) + 1).fill(this.maxPages).map((x, i) => i);
      }
      this.page = 1;
    }
  }

  setPageButton(page: number): MyButtonConfig {
    if (this.page === page + 1) {
      this.pageButtonConfig = new MyButtonConfig(faHashtag, (page + 1).toString(), 'active mt-3 btn btn-outline-warning');
    } else {
      this.pageButtonConfig = new MyButtonConfig(faHashtag, (page + 1).toString(), 'mt-3 btn btn-outline-warning');
    }
    return this.pageButtonConfig;
  }

  setPage(page: number) {
    this.page = page + 1;
  }

  prev() {
    if (this.page > 1) {
      this.page--;
    }
  }

  next() {
    if (this.page < this.maxPages) {
      this.page++;
    }
  }

  applyFilter(searchFor: string, searchValue: string) {
    this.filtered = this.data.filter((i: any) => i[searchFor.toLowerCase()].toString().toLowerCase().includes(searchValue.toLowerCase()));
    this.onItemPerPageChange();
  }

  getEvent(entity: any, action: MyTableActionsEnum) {
    this.newItemEvent.emit({entity: entity, action: action});
  }

}


export class MyTableConfig {
  headers: MyHeaders[];
  search: MySearch;
  actions: MyTableAction[];
  pagination: MyPagination;
  order: MyOrder;
  topAction: MyTableAction[];

  constructor(headers: MyHeaders[], search: MySearch, actions: MyTableAction[], pagination: MyPagination, order: MyOrder, topAction: MyTableAction[]) {
    this.headers = headers;
    this.search = search;
    this.actions = actions;
    this.pagination = pagination;
    this.order = order;
    this.topAction = topAction;
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

export class MySearch {
  columns: string[];

  constructor(columns: string[]) {
    this.columns = columns;
  }
}

export enum MyTableActionsEnum {
  NEW_ROW = 'Aggiungi',
  EDIT = 'Modifica',
  VIEW_RES = 'Visualizza',
  DELETE = 'Elimina',
  APPROVE = 'Approva',
  DECLINE = 'Declina'
}

export class MyTableAction {
  actionEnum: MyTableActionsEnum;
  buttonStyle: MyButtonConfig;


  constructor(actionEnum: MyTableActionsEnum, buttonStyle: MyButtonConfig) {
    this.actionEnum = actionEnum;
    this.buttonStyle = buttonStyle;
  }
}

export class MyOrder {
  defaultColumn: string;
  orderType: string;

  constructor(defaultColumn: string, orderType: string) {
    this.defaultColumn = defaultColumn;
    this.orderType = orderType;
  }
}

export class MyPagination {
  itemPerPage: number;
  itemPerPageOptions: number[];

  constructor(itemPerPage: number, itemPerPageOptions: number[]) {
    this.itemPerPage = itemPerPage;
    this.itemPerPageOptions = itemPerPageOptions;
  }
}
