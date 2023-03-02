import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Reservation} from "../reservation";
import {ReservationsService} from "../services/reservations.service";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit{
  id!:number;
  reservation!:Reservation;


  constructor(private route:ActivatedRoute, private reservationsService:ReservationsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
    })
    this.reservationsService.getReservationById(this.id).subscribe(res => this.reservation = res);
  }

  post(reservation:Reservation){
    console.log(reservation);
  }


}
