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
  private reservationsUrl = 'http://localhost:8080/rental-car/reservations';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  constructor(private router: Router, private http: HttpClient) {
  }

  getReservations(): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationsUrl+'/user/'+localStorage.getItem('id'));
  }

  getReservationById(id: number): Observable<Reservation> {
    const url = `${this.reservationsUrl}/${id}`;
    return this.http.get<Reservation>(url);
  }

  updateReservation(reservation: Reservation): Observable<any> {
    return this.http.post<Reservation>(this.reservationsUrl, reservation, this.httpOptions);
  }

  approveReservationById(id:number) {
    this.getReservationById(id).subscribe(res => {
      res.confirmed=true;
      this.http.put(this.reservationsUrl, res, this.httpOptions);
    });
  }

  declineReservationById(id:number) {
    this.getReservationById(id).subscribe(res => {
      res.confirmed=false;
      this.http.put(this.reservationsUrl, res, this.httpOptions);
    });
  }

  deleteReservation(reservation: Reservation): Observable<Reservation> {
    const url = `${this.reservationsUrl}/${reservation.id}`;
    return this.http.delete<Reservation>(url, this.httpOptions);
  }

}
