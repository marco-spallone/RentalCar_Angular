import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Car} from "../car";
import {CARS} from "../mock/mock-cars";
import {Router} from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private carsUrl = 'http://localhost:4200/api/CARS_DB';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private router:Router, private http:HttpClient) { }

  getCars(): Observable<Car[]> {
    console.log(this.http.get<Car[]>(this.carsUrl));
    return this.http.get<Car[]>(this.carsUrl);
  }

  getCarById(id:number): Observable<Car>{
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url);
  }

  updateCar(car:Car): Observable<any>{
    return this.http.put(this.carsUrl, car, this.httpOptions);
  }

  deleteCar(car:Car): Observable<Car>{
    const url = `${this.carsUrl}/${car.id}`;
    return this.http.delete<Car>(url, this.httpOptions);
  }
}
