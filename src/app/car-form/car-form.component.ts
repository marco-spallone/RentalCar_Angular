import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CarsService} from "../services/cars.service";
import {Car} from "../car";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit{
  id!:number
  car!:Car;
  cars!:Car[];

  constructor(private route: ActivatedRoute, private carsService: CarsService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
    })
    this.carsService.getCarById(this.id).subscribe(car => this.car = car);
  }

  post(car: any) {
    this.carsService.updateCar(car);
  }
}
