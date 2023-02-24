import {Component, Input, OnInit} from '@angular/core';
import {Car} from "../car";
import {CARS} from "../mock-cars";
import {carsTableConfig} from "../config/table-config";
import {editButtonConfig, deleteButtonConfig} from "../button/config/button-config";
import {MyTableConfig} from "../users/users.component";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  cars: Car[] = CARS;
  @Input() tableConfig: MyTableConfig = carsTableConfig;
  @Input() data!: any[];
  editButtonConfig=editButtonConfig;
  deleteButtonConfig=deleteButtonConfig;

  ngOnInit() {
    this.data=this.cars;
  }

}
