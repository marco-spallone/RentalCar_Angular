import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CarsService} from "../services/cars.service";
import {Car} from "../interfaces/car";
import {Location} from '@angular/common';
import {MyTableActionsEnum} from "../table/table.component";


@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  carId!: number
  car!: Car;
  action!: MyTableActionsEnum;

  constructor(private route: ActivatedRoute, private router: Router, private carsService: CarsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.action = params['action'];
      this.carId = Number.parseInt(params['carId']);
    })
    if (this.action === MyTableActionsEnum.EDIT) {
      this.carsService.getCarById(this.carId).subscribe(car => this.car = car);
    } else {
      this.car = {
        id: null,
        brand: '',
        model: '',
        year: 0,
        price: '',
        plate: ''
      }
    }
  }

  post(car: Car) {
    if (car.brand != null && car.model != null && car.year != null && 1900 <= car.year && car.year <= 2023 && car.price != null && car.plate != null
      && Array.from(car.brand)[0] != ' ' && Array.from(car.model)[0] != ' ' && Array.from(car.price)[0] != ' ' && Array.from(car.plate)[0] != ' ') {
      this.carsService.updateCar(car).subscribe(() => this.router.navigate(['cars']));
    }
  }
}
