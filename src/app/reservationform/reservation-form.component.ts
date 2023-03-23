import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Reservation} from "../interfaces/reservation";
import {ReservationsService} from "../services/reservations.service";
import {MyTableActionsEnum} from "../table/table.component";
import {CarsService} from "../services/cars.service";
import * as moment from "moment";
import {UsersService} from "../services/users.service";
import {Car} from "../interfaces/car";
import {ReservationDTO} from "../dto/reservationDTO";
import {ReservationDTOMapper} from "../mapper/reservationDTOMapper";

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
  insertedDate: boolean = false;
  cars!: Car[];
  reservationDTO!: ReservationDTO;
  startDate!: string;
  endDate!: string;


  constructor(private route: ActivatedRoute, private router: Router, private usersService: UsersService,
              private reservationsService: ReservationsService, private carsService: CarsService, private mapper: ReservationDTOMapper) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.reservationId = Number.parseInt(params['resId']);
      this.userId = parseInt(localStorage.getItem('userId')!);
      if (this.action === MyTableActionsEnum.EDIT) {
        this.reservationsService.getReservationById(this.reservationId).subscribe(res => {
          this.reservationDTO = this.mapper.fromResToDTO(res);
          this.checkEditable();
        });
      } else {
        this.usersService.getUserById(this.userId).subscribe(user => {
          this.reservationDTO = {
            id: null,
            startDate: '',
            endDate: '',
            confirmed: 'No',
            userId: user.id!,
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

  getFreeCars(startDate: string, endDate: string) {
    if (startDate != null && endDate != null) {
      this.carsService.getFreeCars(startDate, endDate).subscribe(cars => {
        this.cars = cars;
        this.insertedDate = true;
        this.startDate = startDate;
        this.endDate = endDate;
      });
    }
  }

  post(car: string) {
    let carId = parseInt(car);
    if (this.reservationId != null) {
      this.reservationDTO.id = this.reservationId;
    } else {
      this.reservationDTO.id = null;
    }
    this.reservationDTO.startDate = this.startDate;
    this.reservationDTO.endDate = this.endDate;
    this.reservationDTO.confirmed = null;
    this.reservationDTO.userId = this.userId;
    this.reservationDTO.carId = carId;
    this.reservationsService.updateReservation(this.reservationDTO).subscribe(res => {
      this.router.navigate(['reservations', localStorage.getItem('userId')])
    });
  }

  back() {
    this.router.navigate(['reservations', this.userId]);
  }
}
