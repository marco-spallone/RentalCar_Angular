import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../car";
import {CARS} from "../mock-cars";
import {carsTableConfig} from "../config/table-config";
import {editButtonConfig, deleteButtonConfig} from "../button/config/button-config";
import {MyTableConfig} from "../table/table.component";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  tableConfig!: MyTableConfig;
  data!: any[];
  filtered!:any[];

  ngOnInit() {
    this.tableConfig=carsTableConfig;
    this.data=CARS;
    this.filtered=this.data;
  }

}
