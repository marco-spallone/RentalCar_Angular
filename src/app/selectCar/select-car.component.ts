import {Component, OnInit} from '@angular/core';
import {Reservation} from "../interfaces/reservation";
import {Car} from "../interfaces/car";
import {ActivatedRoute, Router} from "@angular/router";
import {CarsService} from "../services/cars.service";
import {User} from "../interfaces/user";
import {UsersService} from "../services/users.service";
import {ReservationsService} from "../services/reservations.service";

@Component({
  selector: 'app-select-car',
  templateUrl: './select-car.component.html',
  styleUrls: ['./select-car.component.css']
})
export class SelectCarComponent implements OnInit{

  startDate!:string;
  endDate!:string;
  reservation!:Reservation;
  cars!:Car[];
  user!:User;

  constructor(private route:ActivatedRoute, private router:Router, private carsService:CarsService, private usersService:UsersService,
              private reservationService:ReservationsService) {
  }

  ngOnInit() {
    this.usersService.getUserById(parseInt(localStorage.getItem('userId')!)).subscribe(user => {
      this.user = user;
      this.reservation = {
        id: null,
        startDate: '',
        endDate: '',
        confirmed: false,
        user: user,
        car: null
      }
    })
    this.route.params.subscribe(params => {
      this.startDate=params['startDate'];
      this.endDate=params['endDate'];
      this.carsService.getFreeCars(this.startDate, this.endDate).subscribe(cars => {
        this.cars=cars;
      })
    })

  }

  post(value:string){
    let carId = parseInt(value);
    this.carsService.getCarById(carId).subscribe(car => {
      this.reservation.car=car;
      this.reservation.startDate=this.startDate;
      this.reservation.endDate=this.endDate;
      console.log(this.reservation);
      this.reservationService.updateReservation(this.reservation);
    })
  }

}
