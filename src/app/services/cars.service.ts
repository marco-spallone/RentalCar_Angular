import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Car} from "../car";
import {Router} from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private carsUrl = 'api/CARS_DB';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private router:Router, private http:HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl);
  }

  getCarById(id:number): Observable<Car>{
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url);
  }

  addCar(car:Car): Observable<Car>{
    return this.http.post<Car>(this.carsUrl, car, this.httpOptions);
  }

  updateCar(car:Car): Observable<any>{
    return this.http.put(this.carsUrl, car, this.httpOptions);
  }

  deleteCar(car:Car): Observable<Car>{
    const url = `${this.carsUrl}/${car.id}`;
    return this.http.delete<Car>(url, this.httpOptions);
  }
}
