import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../users.service";
import {CarsService} from "../cars.service";
import {Car} from "../car";

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit{
  id!:number
  data!:any;
  cars!:Car[];

  constructor(private route: ActivatedRoute, private carsService: CarsService) {
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = Number.parseInt(params['id']);
    })
    this.getCars();
    this.data=this.carsService.carToEdit;
  }

  getCars(): void{
    this.carsService.getCars().subscribe(cars => this.cars = cars);
  }

  editCar(){
    this.data.marca=(<HTMLInputElement>document.getElementById('marca')).value;
    this.data.modello=(<HTMLInputElement>document.getElementById('modello')).value;
    this.data.anno=(<HTMLInputElement>document.getElementById('anno')).value;
    this.data.prezzo=(<HTMLInputElement>document.getElementById('prezzo')).value;
    this.data.targa=(<HTMLInputElement>document.getElementById('targa')).value;
    let indexToUpdate = this.cars.findIndex(item => item.id === this.data.id);
    this.cars[indexToUpdate] = this.data;
    this.cars = Object.assign([], this.cars);
  }
}
