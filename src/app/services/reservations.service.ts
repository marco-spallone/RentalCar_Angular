import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Reservation} from "../reservation";
import {RESERVATIONS} from "../mock/mock-reservations";

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

  constructor() { }

  getReservations(id:number): Observable<Reservation[]>{
    const reservations = of(RESERVATIONS.filter(item => item.id_utente === id));
    return reservations;
  }
}
