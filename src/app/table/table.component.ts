import {Component, Input, OnInit} from '@angular/core';
import {editButtonConfig, deleteButtonConfig, viewResButtonConfig} from "../button/config/button-config";
import {Router} from "@angular/router";
import {UsersService} from "../users.service";
import {CarsService} from "../cars.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  @Input() tableConfig!: MyTableConfig;
  @Input() data!: any[];
  filtered!: any[];
  editButtonConfig=editButtonConfig;
  deleteButtonConfig=deleteButtonConfig;
  viewResButtonConfig=viewResButtonConfig;

  constructor(public router: Router, private userService: UsersService, private carsService: CarsService) {
  }
  ngOnInit(): void {
    this.filtered=this.data;
  }

  applyFilter(searchFor: string, searchValue: string) {
    this.filtered = this.data.filter((i: any) => i[searchFor.toLowerCase()].toString().toLowerCase().includes(searchValue.toLowerCase()));
  }
  edit(whichTable:string, data:any){
    if(whichTable==='users'){
      this.userService.setUserToEdit(data);
      this.router.navigate(['editUser', data.id]);
    } else if(whichTable==='cars') {
      this.carsService.setCarToEdit(data);
      this.router.navigate(['editCar', data.id]);
    }

  }

  viewRes(whichTable:string, data:any){

  }

  delete(whichTable:string, data:any){
    let index = this.filtered.indexOf(data, 0);
    this.filtered.splice(index, 1);
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
