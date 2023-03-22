import {Component, OnInit} from '@angular/core';
import {Reservation} from "../interfaces/reservation";
import {Car} from "../interfaces/car";
import {ActivatedRoute, Router} from "@angular/router";
import {CarsService} from "../services/cars.service";
import {User} from "../interfaces/user";
import {UsersService} from "../services/users.service";
import {ReservationsService} from "../services/reservations.service";
import {ReservationDTO} from "../dto/reservationDTO";

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.component.html',
  styleUrls: ['./select-car.component.css']
})
export class SelectCarComponent implements OnInit {

  startDate!: string;
  endDate!: string;
  reservationId!: number;
  reservation!: Reservation;
  cars!: Car[];
  user!: User;
  reservationDTO!: ReservationDTO;

  constructor(private route: ActivatedRoute, private router: Router, private carsService: CarsService, private usersService: UsersService,
              private reservationService: ReservationsService) {
  }

  ngOnInit() {
    this.usersService.getUserById(parseInt(localStorage.getItem('userId')!)).subscribe(user => {
      this.user = user;
      this.reservationDTO = {
        id: null,
        startDate: '',
        endDate: '',
        confirmed: 'No',
        userId: user.id!,
        carId: null
      }
    })
    this.route.params.subscribe(params => {
      this.startDate = params['startDate'];
      this.endDate = params['endDate'];
      if (params['resId'] != null) {
        this.reservationId = params['resId'];
      }
      this.carsService.getFreeCars(this.startDate, this.endDate).subscribe(cars => {
        this.cars = cars;
      })
    })

  }

  post(value: string) {
    let carId = parseInt(value);
    if (this.reservationId != null) {
      this.reservationDTO.id = this.reservationId;
    } else {
      this.reservationDTO.id = null;
    }
    this.reservationDTO.startDate = this.startDate;
    this.reservationDTO.endDate = this.endDate;
    this.reservationDTO.confirmed = null;
    this.reservationDTO.userId = this.user.id;
    this.reservationDTO.carId = carId;
    this.reservationService.updateReservation(this.reservationDTO).subscribe(res => {
      this.router.navigate(['reservations', localStorage.getItem('userId')])
    });
  }
}
