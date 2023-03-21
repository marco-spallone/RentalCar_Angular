import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Reservation} from "../interfaces/reservation";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {ReservationDTO} from "../dto/reservationDTO";

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

  getReservations(id:number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(this.reservationsUrl+'/user/'+id);
  }

  getReservationById(id: number): Observable<Reservation> {
    const url = `${this.reservationsUrl}/${id}`;
    return this.http.get<Reservation>(url);
  }

  updateReservation(reservationDTO: ReservationDTO): Observable<any> {
    return this.http.post<Reservation>(this.reservationsUrl, reservationDTO, this.httpOptions);
  }

  approveReservation(id:number): Observable<any> {
    return this.http.post<Reservation>(this.reservationsUrl+'/approve/'+id, this.httpOptions);
  }

  declineReservation(id:number): Observable<any> {
    return this.http.post<Reservation>(this.reservationsUrl+'/decline/'+id, this.httpOptions);
  }

  deleteReservation(reservation: Reservation): Observable<Reservation> {
    const url = `${this.reservationsUrl}/${reservation.id}`;
    return this.http.delete<Reservation>(url, this.httpOptions);
  }

}
