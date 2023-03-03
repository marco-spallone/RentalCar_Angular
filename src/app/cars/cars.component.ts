import {Component, OnInit} from '@angular/core';
import {carsTableConfig} from "../config/table-config";
import {MyTableActionsEnum, MyTableConfig} from "../table/table.component";
import {CarsService} from "../services/cars.service";
import {Router} from "@angular/router";
import {Car} from "../interfaces/car";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  tableConfig!: MyTableConfig;
  cars!: Car[];


  constructor(private router: Router, private carService:CarsService) {
  }

  ngOnInit() {
    this.carService.getCars().subscribe(cars => {this.cars = cars; console.log(this.cars)});
    this.tableConfig=carsTableConfig;
  }

  action(car:Car, action:MyTableActionsEnum){
    switch (action) {
      case MyTableActionsEnum.NEW_ROW:
        this.router.navigate(['addCar', action]);
        break;
      case MyTableActionsEnum.EDIT:
        this.router.navigate(['editCar', action, car.id]);
        break;
      case MyTableActionsEnum.DELETE:
        this.carService.deleteCar(car).subscribe(() => {
          this.carService.getCars().subscribe(cars => this.cars = cars);
        });
        break;
      default:
        break;
    }
  }
}
