import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Car} from "../interfaces/car";
import {Router} from "@angular/router";
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private carsUrl = 'http://localhost:8080/rental-car/cars';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private router: Router, private http: HttpClient) {
  }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl, this.httpOptions);
  }

  getCarById(id: number): Observable<Car> {
    const url = `${this.carsUrl}/${id}`;
    return this.http.get<Car>(url);
  }

  getFreeCars(startDate: string, endDate: string): Observable<Car[]> {
    const freeCarRequest: any = {
      startDate: startDate,
      endDate: endDate
    }
    return this.http.post<Car[]>(this.carsUrl + "/free-cars", freeCarRequest);
  }

  updateCar(car: Car): Observable<any> {
    return this.http.post<Car>(this.carsUrl, car, this.httpOptions);
  }

  deleteCar(car: Car): Observable<Car> {
    const url = `${this.carsUrl}/${car.id}`;
    return this.http.delete<Car>(url, this.httpOptions);
  }
}
