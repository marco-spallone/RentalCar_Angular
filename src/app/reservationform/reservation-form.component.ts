import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../interfaces/reservation";
import {ReservationsService} from "../services/reservations.service";
import {MyTableActionsEnum} from "../table/table.component";
import {Car} from "../interfaces/car";
import {CarsService} from "../services/cars.service";

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
  reservationId!: number;
  reservation!: Reservation;
  action!: MyTableActionsEnum;
  userId!: number;
  editable: boolean = true;
  reservations!: Reservation[];
  cars!: Car[];


  constructor(private route: ActivatedRoute, private router: Router, private reservationsService: ReservationsService, private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.reservationId = Number.parseInt(params['resId']);
      this.userId = parseInt(params['userId']);
    })
    if (this.action === MyTableActionsEnum.EDIT) {
      this.reservationsService.getReservationById(this.reservationId).subscribe(res => {
        this.reservation = res;
        this.checkEditable();
      });
    } else {
      this.reservation = {
        id: null,
        data_inizio: '',
        data_fine: '',
        confermata: false,
        id_utente: this.userId,
        id_auto: 0
      }
    }
    this.carsService.getCars().subscribe(cars => this.cars = cars);
  }

  checkEditable() {
    let date2 = new Date();
    let date1 = new Date(this.reservation.data_inizio);
    let diff = Math.abs(date2.getTime() - date1.getTime());
    let days = Math.ceil(diff / (1000 * 3600 * 24));
    if (days < 2) {
      this.editable = false;
    } else this.editable = true;
  }

  post(reservation: Reservation) {
    if (reservation.data_inizio != null && reservation.data_fine != null && reservation.id_auto != null) {
      if (this.action === MyTableActionsEnum.EDIT) {
        this.reservationsService.updateReservation(reservation).subscribe(() => this.router.navigate(['reservations', this.userId]));
      } else if (this.action === MyTableActionsEnum.NEW_ROW) {
        this.reservationsService.addReservation(reservation).subscribe(() => this.router.navigate(['reservations', this.userId]));
      }
    }
  }

  back() {
    this.router.navigate(['reservations', this.userId]);
  }
}
