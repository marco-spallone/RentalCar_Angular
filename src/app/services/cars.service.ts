import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Car} from "../car";
import {CARS} from "../mock/mock-cars";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  car!:Car;

  constructor() { }

  getCars(): Observable<Car[]> {
    const cars = of(CARS);
    return cars;
  }

  getCarById(cars:any[], id:number): any{
    this.car=cars.filter(item => item.id === id)[0];
  }

  updateCar(cars:any[], car:any): any[]{
    let indexToUpdate = cars.findIndex(item => item.id === car.id);
    cars[indexToUpdate] = car;
    cars = Object.assign([], cars);
    console.log(cars);
    return cars;
  }

  deleteCar(cars:any[], car:any): any[]{
    let index = cars.indexOf(car, 0);
    cars.splice(index, 1);
    return cars;
  }
}
