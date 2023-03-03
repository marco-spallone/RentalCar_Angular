import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../interfaces/reservation";
import {ReservationsService} from "../services/reservations.service";
import {MyTableActionsEnum} from "../table/table.component";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationId!: number;
  reservation!: Reservation;
  action!: MyTableActionsEnum;
  userId!:number;
  valid:boolean=true;


  constructor(private route: ActivatedRoute, private router:Router, private reservationsService: ReservationsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.reservationId = Number.parseInt(params['resId']);
      this.userId=parseInt(params['userId']);
    })
    if (this.action === MyTableActionsEnum.EDIT) {
      this.reservationsService.getReservationById(this.reservationId).subscribe(res => this.reservation = res);
    } else {
      this.reservation = {
        id:null,
        data_inizio: '',
        data_fine: '',
        confermata: false,
        id_utente: this.userId,
        id_auto: 0
      }
    }
  }

  post(reservation: Reservation) {
    if (reservation.data_inizio != null && reservation.data_fine != null) {
      if (this.action === MyTableActionsEnum.EDIT) {

      } else if (this.action === MyTableActionsEnum.NEW_ROW) {
        this.reservationsService.addReservation(reservation).subscribe(() => this.router.navigate(['reservations', this.userId]));
        this.valid = true;
      } else {
        this.valid = false;
      }
    }
  }


}
