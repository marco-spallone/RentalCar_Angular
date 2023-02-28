import {Component, Input, OnInit} from '@angular/core';
import {carsTableConfig} from "../config/table-config";
import {editButtonConfig, deleteButtonConfig} from "../button/config/button-config";
import {MyTableConfig} from "../table/table.component";
import {CarsService} from "../services/cars.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit{
  tableConfig!: MyTableConfig;
  cars!: any[];
  filtered!:any[];


  constructor(private router: Router, private carService:CarsService) {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

  ngOnInit() {
    this.tableConfig=carsTableConfig;
    this.getCars();
    this.filtered=this.cars;
  }

  getCars(): void{
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

  action(whichTable:string, cars:any[], car:any, action:string){
    if(whichTable==='cars'){
      switch (action){
        case 'edit':
          this.carService.getCarById(cars, car.id);
          this.router.navigate(['editCar', car.id]);
          break;
        case 'post':
          this.carService.updateCar(this.cars, car);
          break;
        case 'delete':
          this.carService.deleteCar(this.cars, car);
          break;
        default:
          break;
      }
    }
  }

}
