import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Car} from "../car";
import {CARS} from "../mock/mock-cars";
import {USERS} from "../mock/mock-users";

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() { }

  getCars(): Observable<Car[]> {
    const cars = of(CARS);
    return cars;
  }

  getCarById(id:number){
    return of(CARS.filter(item => item.id === id)[0]);
  }

  updateCar(car:any){
    let indexToUpdate = CARS.findIndex(item => item.id === car.id);
    CARS[indexToUpdate] = car;
    console.log(CARS);
  }

  deleteCar(car:any){
    let index = CARS.indexOf(car, 0);
    CARS.splice(index, 1);
  }
}
