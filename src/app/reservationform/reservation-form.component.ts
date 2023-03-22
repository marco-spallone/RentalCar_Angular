import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../interfaces/reservation";
import {ReservationsService} from "../services/reservations.service";
import {MyTableActionsEnum} from "../table/table.component";
import {CarsService} from "../services/cars.service";
import * as moment from "moment";
import {UsersService} from "../services/users.service";

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


  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService, private reservationsService: ReservationsService, private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.reservationId = Number.parseInt(params['resId']);
      this.userId = parseInt(params['userId']);
      if (this.action === MyTableActionsEnum.EDIT) {
        this.reservationsService.getReservationById(this.reservationId).subscribe(res => {
          this.reservation = res;
          this.checkEditable();
        });
      } else {
        this.usersService.getUserById(this.userId).subscribe(user => {
          this.reservation = {
            id: null,
            startDate: '',
            endDate: '',
            confirmed: false,
            userId: this.userId,
            carId: null
          }
        })
      }
    })
  }

  checkEditable() {
    let date2 = moment();
    let date1 = moment(this.reservation.startDate);
    return date1.diff(date2, 'days') >= 2 ? this.editable = true : this.editable = false;
  }

  post(startDate: string, endDate: string) {
    if (this.reservationId != null) {
      if (startDate != null && endDate != null) {
        this.router.navigate(['selectCar', startDate, endDate, this.reservationId]);
      }
    } else {
      if (startDate != null && endDate != null) {
        this.router.navigate(['selectCar', startDate, endDate]);
      }
    }
  }

  back() {
    this.router.navigate(['reservations', this.userId]);
  }
}
