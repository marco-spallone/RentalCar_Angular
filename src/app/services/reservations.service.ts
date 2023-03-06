import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Reservation} from "../interfaces/reservation";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {Car} from "../interfaces/car";
import {CarsService} from "./cars.service";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private reservationsUrl = 'api/RESERVATIONS_DB';
  allReservations!: Reservation[];
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private router: Router, private http: HttpClient, private carsService: CarsService) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationsUrl);
  }

  getReservationById(id: number): Observable<Reservation> {
    const url = `${this.reservationsUrl}/${id}`;
    return this.http.get<Reservation>(url);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>(this.reservationsUrl, reservation, this.httpOptions);
  }

  updateReservation(reservation: Reservation): Observable<any> {
    return this.http.put(this.reservationsUrl, reservation, this.httpOptions);
  }

  deleteReservation(reservation:Reservation): Observable<Reservation>{
    const url = `${this.reservationsUrl}/${reservation.id}`;
    return this.http.delete<Reservation>(url, this.httpOptions);
  }

}
