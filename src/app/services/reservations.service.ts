import { Injectable } from '@angular/core';
import {filter, Observable, of} from "rxjs";
import {Reservation} from "../reservation";
import {RESERVATIONS} from "../mock/mock-reservations";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Router} from "@angular/router";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {
  private reservationsUrl = 'api/RESERVATIONS_DB';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private router:Router, private http:HttpClient) { }

  getReservations(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>(this.reservationsUrl);
  }

  getReservationById(id:number): Observable<Reservation>{
    const url = `${this.reservationsUrl}/${id}`;
    return this.http.get<Reservation>(url);
  }

  addReservation(reservation:Reservation): Observable<Reservation>{
    return this.http.post<Reservation>(this.reservationsUrl, reservation, this.httpOptions);
  }
}
